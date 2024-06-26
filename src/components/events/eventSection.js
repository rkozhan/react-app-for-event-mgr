import React, { Component } from 'react';
import { connect } from 'react-redux';
import { eventsLoaded, setLoading, setModal } from "../../actions/action";
import fetchData from '../../services/fetchData';
import './event.css';
import EventList from './eventList';

class EventSection extends Component {

    async getEvents() {
        this.props.setLoading(true);
        try {
            const data = await fetchData("events");
            this.props.eventsLoaded(data);
            console.log(data);
        } catch (error) {
            console.log("error");
        } finally {
            this.props.setLoading(false);
        }
    }

    componentDidMount() {
        this.getEvents();
    }

    render() {
        const isManager = this.props.roles.includes("ROLE_MANAGER");

        return (
            <section className='event'>
                <div className="event_nav">
                    <button onClick={() => this.getEvents()}>Update List</button>

                    {
                    isManager ? (<>
                        <button onClick={() => this.props.setModal('event_add')}>Add Event</button> 
                    </>) : ""}
                </div>
                <EventList/>
            </section>
        )
    }
}

//TODO addEventForm

const mapStateToProps = (state) => ({
    roles: state.roles
});

const mapDispatchToProps = {
    setLoading,
    eventsLoaded,
    setModal
};

export default connect(mapStateToProps, mapDispatchToProps)(EventSection);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../spinner/spinner';
import EventItem from './eventItem';

class EventList extends Component {

    render() {

        return (
            <div className='event__list'>
                <h1>Event List</h1>
                <ul>{
                    this.props.loading ? (<Spinner />) : (
                        this.props.events.map(event => (
                            <EventItem key={event.id} event={event} />
                        ))
                    )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    events: state.events,
    loading: state.loading
});

export default connect(mapStateToProps)(EventList);
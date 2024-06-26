import React, { Component } from 'react';
import { connect } from 'react-redux';

class EventItem extends Component {

    render() {
        const { event } = this.props;
        const IsManager = this.props.roles.includes("ROLE_MANAGER");

        return (
            <li key={event.id}>
                <img className='event__list_img' src='https://lh5.googleusercontent.com/proxy/gOA_VRRfg-zq-n18PoHQu0r7y8QU9TXPzRgCJ_iqBDkR2nOHckwmmzSdw1WuMAFFkoDv6kc7gYJ0bE64yw' alt="Event placeholder" />
                <div>
                    <b>{event.title}</b>
                    <p>{event.description}</p>
                </div>
                <div>
                    <div className='event__list_date'>Date: {event.date} </div>
                    <div>Time: {event.time} </div>
                </div>
                {
                this.props.roles.includes("ROLE_MANAGER") ? (<>
                        <button >Delete Event</button> 
                    </>) : ""}
                
            </li>
        );
    }
}


const mapStateToProps = (state) => ({
    roles: state.roles
});

export default connect(mapStateToProps)(EventItem);
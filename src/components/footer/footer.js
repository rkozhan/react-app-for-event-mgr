import './footer.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRoles } from '../../actions/action';

class Footer extends Component {

    render() {
        return (
            <footer>
                <button onClick={() => this.props.setRoles(['user'])}>test user</button>
                <button onClick={() => this.props.setRoles(['admin'])}>test admin</button>
                <button onClick={() => this.props.setRoles(['manager'])}>test manager</button>
                
            </footer>
        );
    }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
    setRoles
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
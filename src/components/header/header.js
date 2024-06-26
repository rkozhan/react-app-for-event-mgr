import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setModal, logout, setError } from '../../actions/action';
import checkToken from '../utils/checkToken';

class Header extends Component {

    componentDidMount() {
        checkToken(this.props.setError, this.props.logout);
    }

    render() {
        const isAuthenticated = this.props.isAuthenticated;
        return (
            <header>
                {isAuthenticated ? ("authorised") : ("not authorised")}
                <br/>
                <i>{this.props.token}</i>
                <nav>
                    <button id='burger'>B</button>
                    
                    {isAuthenticated ?
                        <button onClick={()=> this.props.logout()}>Logout</button>
                    : (<>
                        <button onClick={()=> this.props.setModal('login')}>Login</button>
                        <button onClick={()=> this.props.setModal('signup')}>Sign up</button>
                    </>)}

                    <button onClick={()=> this.props.setModal('contact')}>Contact us</button>

                    <button>All Events</button>

                    {
                    !this.props.roles !== "ROLE_ADMIN" ? "" : (<>
                        <button>All Users</button>
                        <button>All Managers</button>
                    </>)}
                    

                    <button onClick={()=> this.props.setModal('impressum')}>Impressum</button>
                </nav>
            
                
            </header>
        );
    }
}

const mapStateToProps = (state) => ({
    roles: state.roles,
    token: state.token,
    isAuthenticated: state.isAuthenticated
});

const mapDispatchToProps = {
    setModal,
    logout,
    setError
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
import './modal.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setModal } from '../../actions/action';
import FormLogin from '../forms/form-login';
import FormEventAdd from '../forms/form-event-add';

class ModalWindow extends Component {

    renderModalContent = (stateModal) => {
        switch (stateModal) {
          case 'login':
            return <FormLogin />;
          case 'contact':
            //return <ContactForm />;
            return "Contact";
          case 'signup':
            //return <SignupForm />;
            return "Signup";
          case 'event_add':
              return <FormEventAdd />;
          case 'impressum':
            //return <SignupForm />;
            return "impressum";
          default:
            return 'closed';
        }
    };

    render () {
        return (
            <div className={this.props.modal === 'close' ? "modal" : "modal active"}>
                <button onClick={() => this.props.setModal()}>X</button>
                {this.renderModalContent(this.props.modal)}
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    modal: state.modal
});

const mapDispatchToProps = {
    setModal
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);
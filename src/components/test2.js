import {connect} from 'react-redux';
import { testAction } from "../actions/action";
import { Component } from 'react';

class Test2 extends Component {

    render() {
        console.log("rendering Test2 component...");
        return (
            <div>
                {['red', 'blue', 'green'].map((color) => {
                    return (
                        <button key={color} onClick={() => this.props.testAction(color)}>
                            {color}
                        </button>
                    );
                })}
            </div>
        );
    }
}

const mapDispatchToProps = {
    testAction,
};

export default connect(null, mapDispatchToProps)(Test2);
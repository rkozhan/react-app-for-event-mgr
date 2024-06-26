import { Component } from 'react';
import {connect} from 'react-redux';

class Test1 extends Component {
    render() {
        console.log("rendering test1 component...");

        return (
            <div style={{backgroundColor: this.props.test}}>test1</div>
        )
    }
}
    
const mapStateToProps = (state) => {
    return {
        test: state.test
    }
}

export default connect(mapStateToProps)(Test1);
import React from 'react';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class RegisterButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link className="register" to={`/register`} activeClassName="active">Register</Link>
        )
    }
}

function mapStateToProps(state) {
    return {
    };
}


function matchDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(RegisterButton);
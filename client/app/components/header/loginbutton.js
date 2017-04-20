import React from 'react';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class LoginButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button type="button" className="Button">
                <Link className="login" to={`/login`} activeClassName="active">
                    Login
                </Link>
            </button>
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


export default connect(mapStateToProps, matchDispatchToProps)(LoginButton);
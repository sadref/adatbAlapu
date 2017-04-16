import React from 'react';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { connect } from 'react-redux';

import LoginButton from './loginbutton';
import RegisterButton from './registerbutton';

class ButtonContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar-text navbar-right actions">
                <RegisterButton />
                <LoginButton />
            </div>
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


export default connect(mapStateToProps, matchDispatchToProps)(ButtonContainer);
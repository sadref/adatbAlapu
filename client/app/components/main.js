import React from 'react';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const socket = require('socket.io-client')('http://localhost:3000')

require('../css/bootstrap.min.css');
require('../css/font-awesome.min.css');
require('../css/styles.css');

import Header from './header/index';


class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                {this.props.children && React.cloneElement(this.props.children, {
                    socket: socket
                })}
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


export default connect(mapStateToProps, matchDispatchToProps)(Main);
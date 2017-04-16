import React from 'react';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { connect } from 'react-redux';

require('../../css/header.css');

import Search from './search';
import ButtonContainer from './buttoncontainer'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav id="navbar" className="navbar navigation-clean-button">
                <div id="brandname">Webshop</div>
                <Search />
                <ButtonContainer />
            </nav>
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


export default connect(mapStateToProps, matchDispatchToProps)(Header);
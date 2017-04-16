import React from 'react';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { connect } from 'react-redux';

import SlideShow from './slideshow';
import NewProducts from './newproducts';

class Start extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="start">
                <SlideShow />
                <NewProducts />
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


export default connect(mapStateToProps, matchDispatchToProps)(Start);
import React from 'react';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { connect } from 'react-redux';

import UserPageButton from './userpagebutton'
import UserChartButton from './userchartbutton'


class IconButtonContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="iconbuttoncontainer">
                <UserPageButton />
                <UserChartButton />
                
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


export default connect(mapStateToProps, matchDispatchToProps)(IconButtonContainer);
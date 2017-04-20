import React from 'react';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { connect } from 'react-redux';
import { Link } from 'react-router';
//import ShoppingCart from 'react-icons/lib/md/shopping-cart';

class UserChartButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="shccontainer">
                <button className="shoppingcart" onClick={() => this.sendRegistration()}>
                    <i className="fa fa-shopping-cart"></i>
                    </button>
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


export default connect(mapStateToProps, matchDispatchToProps)(UserChartButton);
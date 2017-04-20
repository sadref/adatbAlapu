import React from 'react';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { connect } from 'react-redux';
import { Link } from 'react-router';
//import ShoppingCart from 'react-icons/lib/md/shopping-cart';

class UserPageButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="usericontainer">
                <button className="usericon" onClick={() => this.sendRegistration()}>
                    <i className="fa fa-user"></i>
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


export default connect(mapStateToProps, matchDispatchToProps)(UserPageButton);
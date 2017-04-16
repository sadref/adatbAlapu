import React from 'react';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { connect } from 'react-redux';

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
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


export default connect(mapStateToProps, matchDispatchToProps)(Search);
import React from 'react';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { connect } from 'react-redux';

import iPhonePic from '../assets/img/iphone6.jpg';

class NewProducts extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row product-list">
                <div className="col-md-4 col-sm-6 product-item">
                    <div className="product-container">
                        <div className="row">
                            <div className="col-md-12">
                                <a href="#" className="product-image"><img src={iPhonePic} /></a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-8">
                                <h2><a href="#">iPhone 6s</a></h2></div>
                            <div className="col-xs-4"><a href="#" className="small-text">compare </a></div>
                        </div>
                        <div className="product-rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half"></i><a href="#" className="small-text">82 reviews</a></div>
                        <div className="row">
                            <div className="col-xs-12">
                                <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare sem sed nisl dignissim, facilisis dapibus lacus vulputate. Sed lacinia lacinia magna. </p>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <button className="btn btn-default" type="button">Buy Now!</button>
                                    </div>
                                    <div className="col-xs-6">
                                        <p className="product-price">$599.00 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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


export default connect(mapStateToProps, matchDispatchToProps)(NewProducts);
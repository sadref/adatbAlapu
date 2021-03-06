import React from 'react';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { connect } from 'react-redux';
var Slider = require('react-slick');

import PictureOne from '../assets/img/1.png'
import PictureTwo from '../assets/img/2.png'


class SlideShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            useCSS: true
        };
        return (
            <div id="slideshow">
                <Slider ref='slider' {...settings}>
                    <div><img src={PictureOne} /></div>
                    <div><img src={PictureTwo} /></div>
                </Slider>
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


export default connect(mapStateToProps, matchDispatchToProps)(SlideShow);
import React from 'react'
import classes from './Slider.module.css'
import Slider from "react-slick";
import slide1 from '../../Assets/slide1.jpg'
import slide2 from '../../Assets/slide2.jpg'
import slide3 from '../../Assets/slide3.jpg'

import Styled from "styled-components"

const SliderPhotos = (props) => {
    const slides = [slide1, slide2, slide3]

    const settings = {
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        dots: true,
        dotsClass: classes.dots
    };
    return(
        <Slider {...settings}>
            {slides.map(item => <Slide image={item}/>)}
        </Slider>
    )
}

const Slide = Styled.div`
    background-image: ${({ image }) => `url(${image})`};
    width: 100%;
    height: 400px;
    background-size: cover;

`

export default SliderPhotos
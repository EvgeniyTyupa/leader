import React from 'react'
import classes from './Slider.module.css'
import Slider from "react-slick";
import slide1 from '../../Assets/slide1.jpg'
import slide2 from '../../Assets/slide2.jpg'
import slide3 from '../../Assets/slide3.jpg'

import Styled from "styled-components"

const SliderPhotos = (props) => {
    const slides = [
        {
            img: slide1,
            id: "1"
        },
        {
            img: slide2,
            id: "2"
        },
        {
            img: slide3,
            id: "3"        
        }
    ]

    const settings = {
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        dots: true,
        dotsClass: classes.dots
    };
    return(
        <Slider {...settings}>
            {slides.map(item => <Slide image={item.img} key={item.id}/>)}
        </Slider>
    )
}

const Slide = Styled.div`
    background-image: ${({ image }) => `url(${image})`};
    width: 100%;
    height: 400px;
    background-size: cover;

    @media screen and (max-width: 1170px) {
        height: 500px;
        background-position: center;
    }

    @media screen and (max-width: 558px) {
        height: 300px
    }

    @media screen and (max-width: 458px) {
        height: 200px
    }
`

export default SliderPhotos
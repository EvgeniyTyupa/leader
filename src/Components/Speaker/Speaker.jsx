import React, { useEffect } from 'react'
import classes from './Speaker.module.css'
import Styled from 'styled-components'

import Aos from 'aos';
import 'aos/dist/aos.css';

const Speaker = (props) => {
    const { speaker, onClick } = props

    const handleSpeaker = () => {
        onClick(speaker)
    }

    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    return(
        <div className={classes.main} data-aos="fade-down" data-aos-duration="1500">
            <div className={classes.circle} onClick={handleSpeaker}/>
            <SpeakerImage image={speaker.photo} onClick={handleSpeaker}/>
            <h5>{speaker.name}</h5>
            <p>{speaker.short}</p>
        </div>
    )
}

const SpeakerImage = Styled.div`
    background-image: ${({ image }) => `url(${image})`};
    width: 300px;
    height: 300px;
    box-shadow: -5px 3px 10px 0px #0000007a;
    background-size: cover;
    background-position: top;
    cursor: pointer;

    @media screen and (max-width: 350px) {
        width: 280px;
        height: 280px;
    }
`

export default Speaker
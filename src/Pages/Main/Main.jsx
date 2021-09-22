import classes from './Main.module.css'
import video from "../../Assets/pexels.mp4"
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Container from "../../Components/UI/Container/Container"
import { TextField, MenuItem, IconButton } from '@mui/material'
import { makeStyles } from '@material-ui/styles';
import CustomButton from '../../Components/UI/Button/CustomButton'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import logo from '../../Assets/logo.svg'
import SliderPhotos from '../../Components/Slider/Slider'

const useSelectStyles = makeStyles({
    root: {
        color: "#aaaaaa",
        position: 'relative',
        top: '1px',
        margin: "0 50px",
        outline: "none",
        '& .MuiOutlinedInput-notchedOutline': {
            border: "none"
        },
        '& .MuiOutlinedInput-input': {
            paddingTop: 0,
            border: "none",
            outline: "none",
        },
        '& .MuiInputBase-root': {
            color: 'white',
            fontSize: "19px",
            fontWeight: 300,
            fontFamily: 'Helvetica',
            paddingTop: 0,
            border: "none",
            outline: "none",
        },
        '& .MuiInput-underline:before':{
            borderBottom: 0,
            border: "none",
            outline: "none",
        },
        '& .MuiInput-underline:after':{
            borderBottom: "none",
            border: "none",
            outline: "none",
        },
        '& .MuiSelect-select': {
            paddingBottom: 0,
            color: 'white',
            border: "none",
            outline: "none",
        },
        '& .MuiSelect-selectMenu': {
            minHeight: 0,
            border: "none",
            outline: "none",
        },
        '& .MuiSelect-icon': {
            color: 'white',
            border: "none",
            outline: "none",
        }
    }
})

const Main = (props) => {
    const videoRef = useRef()
    const selectStyles = useSelectStyles()
    const { t, i18n } = useTranslation()

    const handleLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
    }

    useEffect(() => {
        if(videoRef){
          videoRef.current.setAttribute("autoplay", "");
          videoRef.current.setAttribute("loop", "");
          videoRef.current.setAttribute("playsinline", "");
          videoRef.current.setAttribute("muted", "");
        }
    }, [videoRef])

    return(
        <div className={classes.main}>
            <div className={classes.back}>
                <video autoPlay loop muted playsInline ref={videoRef} className={classes.homeBack}>
                    <source src={video} type="video/mp4"/>
                </video>
                <div className={classes.videoBlack}></div>
            </div>
            <div className={classes.navbar}>
                <Container>
                    <div className={classes.menu}>
                        <button>{t("navbar.one")}</button>
                        <button>{t("navbar.two")}</button>
                        <button>{t("navbar.three")}</button>
                        <TextField select defaultValue="ru" classes={selectStyles}>
                            <MenuItem value="ru">RU</MenuItem>
                            <MenuItem value="ua">UA</MenuItem>
                        </TextField>
                    </div>
                </Container>
            </div>
            <div className={classes.home}>
                <Container>
                    <div className={classes.titleContainer}>
                        <h1>{t("home.title")}</h1>
                        <p>{t("home.subTitle")}</p>
                    </div>
                    <div className={classes.dateBlock}>
                        <span>{t("home.online")}</span>
                        <span>{t("home.date")}</span>
                    </div>
                    <div className={classes.butContainer}>
                        <CustomButton text={t("action.be")} className={classes.homeBut}/>
                    </div>
                    <IconButton className={classes.circleBut}>
                        <KeyboardArrowDownIcon/>
                    </IconButton>
                </Container>
            </div>
            <div className={classes.about}>
                <h1>{t("about.title")}</h1>
                <div className={classes.aboutBlock}>
                    <div className={classes.text}>
                        <img src={logo} alt="logo" className={classes.logoAbout}/>
                        <p>
                            {t("about.text.one")}&nbsp;
                            <a href="https://www.profi-space.com/" rel="noreferrer nofollow">PROFI Space</a>.&nbsp;
                            {t("about.text.two")}
                            <br/>
                            <br/>
                            {t("about.text.three")}
                        </p>
                    </div>
                    <div className={classes.slider}>
                        <SliderPhotos/>
                    </div>
                </div>
                <div className={classes.bigCircle}/>
            </div>
            <Container>
                <div className={classes.who}>
                    <h3>{t("who.title")}</h3>
                    <p>{t("who.subtitle")}</p>
                    <ul>
                        <li>{t("who.points.one")}</li>
                        <li>{t("who.points.two")}</li>
                        <li>{t("who.points.three")}</li>
                        <li>{t("who.points.four")}</li>
                        <li>{t("who.points.five")}</li>
                        <li>{t("who.points.six")}</li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default Main
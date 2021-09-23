import classes from './Main.module.css'
import video from "../../Assets/pexels.mp4"
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Container from "../../Components/UI/Container/Container"
import { TextField, MenuItem, IconButton, Button } from '@mui/material'
import { makeStyles } from '@material-ui/styles';
import CustomButton from '../../Components/UI/Button/CustomButton'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

import SliderPhotos from '../../Components/Slider/Slider'

import moment from 'moment'

import logo from '../../Assets/logo.svg'
import circle from '../../Assets/circle.svg'
import { useSpeakers } from '../../Hooks/useSpeakers'
import Speaker from '../../Components/Speaker/Speaker'
import ModalSpeaker from '../../Components/Modals/ModalSpeaker/ModalSpeaker'
import ModalShedule from '../../Components/Modals/ModalShedule/ModalShedule'
import Register from '../../Components/Modals/Register/Register'
import { connect } from 'react-redux'
import { setCurrentLanguage } from '../../Redux/commonReducer'
import { useHistory, useLocation } from 'react-router'
import Preloader from '../../Components/Preloader/Preloader'
import Thankyou from '../../Components/Modals/Thankyou/Thankyou'
import Burger from '../../Components/Burger/Burger'

import Aos from 'aos';
import 'aos/dist/aos.css';

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
    const aboutRef = useRef(null)
    const speakersRef = useRef(null)

    const search = useLocation().search
    const lang = new URLSearchParams(search).get('lang')

    const history = useHistory()

    const selectStyles = useSelectStyles()

    const { t, i18n } = useTranslation()

    const speakers = useSpeakers()

    const [isOpenSheduleModal, setIsOpenSheduleModal] = useState(false)
    const [isOpenRegister, setIsOpenRegister] = useState(false)
    const [isOpenThankyou, setIsOpenThankyou] = useState(false)

    const handleShedule = () => {
        setIsOpenSheduleModal(!isOpenSheduleModal)
    }

    const handleRegister = () => {
        setIsOpenRegister(!isOpenRegister)
    }
    
    const [currentSpeaker, setCurrentSpeaker] = useState(null)

    const [paymentLink, setPaymentLink] = useState(null)

    const [userUrl, setUserUrl] = useState(null)

    const handleLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
        props.setCurrentLanguage(event.target.value)
    }

    const scrollToAbout = () => {
        aboutRef.current.scrollIntoView()
    }

    const scrollToSpeakers = () => {
        speakersRef.current.scrollIntoView()
    }

    useEffect(() => {
        if(videoRef){
          videoRef.current.setAttribute("autoplay", "");
          videoRef.current.setAttribute("loop", "");
          videoRef.current.setAttribute("playsinline", "");
          videoRef.current.setAttribute("muted", "");
        }
    }, [videoRef])

    useEffect(() => {
        let date = moment("2021-10-10")
        let now = moment()
        if(now > date){
            setPaymentLink("https://secure.wayforpay.com/page?vkh=614c4702-59d4-44da-a5fd-1e9d22d1dba8")
        }else {
            setPaymentLink("https://secure.wayforpay.com/button/ba1f232bc9156")
        }
    }, [])

    useEffect(() => {
        setUserUrl(window.location.href)
    }, [])

    useEffect(() => {
        if(lang === "ru" || lang === "ua"){
            i18n.changeLanguage(lang)
            props.setCurrentLanguage(lang)
        }
    }, [])

    useEffect(() => {
        if(window.location.pathname === "/thankyou"){
            setIsOpenThankyou(true)
        }
    }, [window.location.pathname])

    useEffect(() => {
        if(props.isSuccess){
            handleRegister()
            history.push('/thankyou')
        }
    }, [props.isSuccess])

    useEffect(() => {
        history.push(history.location.pathname + `?lang=${props.currentLanguage}`)
    }, [props.currentLanguage])

    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    return(
        <div className={classes.main}>
            {currentSpeaker && <ModalSpeaker speaker={currentSpeaker} onClick={setCurrentSpeaker}/>}
            {isOpenSheduleModal && <ModalShedule onClick={handleShedule}/>}
            {isOpenRegister && <Register onClick={handleRegister} userUrl={userUrl}/>}
            {isOpenThankyou && <Thankyou onClick={setIsOpenThankyou}/>}
            {props.isFetching && <Preloader/>}
            <div className={classes.back}>
                <video autoPlay loop muted playsInline ref={videoRef} className={classes.homeBack}>
                    <source src={video} type="video/mp4"/>
                </video>
                <div className={classes.videoBlack}></div>
            </div>
            <div className={classes.navbar} data-aos="fade" data-aos-duration="1000">
                <Container className={classes.navContainer}>
                    <div className={classes.burger}>
                        <Burger handleShedule={handleShedule} aboutRef={aboutRef} speakersRef={speakersRef}/>
                    </div>
                    <div className={classes.menu}>
                        <button onClick={scrollToAbout}>{t("navbar.one")}</button>
                        <button onClick={handleShedule}>{t("navbar.two")}</button>
                        <button onClick={scrollToSpeakers}>{t("navbar.three")}</button>
                        <TextField select defaultValue="ru" classes={selectStyles} onChange={handleLanguage}>
                            <MenuItem value="ru">RU</MenuItem>
                            <MenuItem value="ua">UA</MenuItem>
                        </TextField>
                    </div>
                </Container>
            </div>
            <div className={classes.home}>
                <Container className={classes.homeContainer}>
                    <div className={classes.titleContainer} data-aos="fade-down" data-aos-duration="2000" data-aos-delay="300">
                        <h1>{t("home.title")}</h1>
                        <p>{t("home.subTitle")}</p>
                    </div>
                    <div className={classes.dateBlock}  data-aos="fade-down" data-aos-duration="2000" data-aos-delay="1000">
                        <span>{t("home.online")}</span>
                        <span>{t("home.date")}</span>
                    </div>
                    <div className={classes.butContainer}  data-aos="fade-down" data-aos-duration="2000" data-aos-delay="2000">
                        <CustomButton onClick={handleRegister} text={t("action.be")} className={classes.homeBut}/>
                    </div>
                    <div  data-aos="fade-down" data-aos-duration="2000" data-aos-delay="3000">
                        <IconButton className={classes.circleBut} onClick={scrollToAbout}>
                            <KeyboardArrowDownIcon/>
                        </IconButton>
                    </div>
                </Container>
            </div>
            <div className={classes.about} ref={aboutRef}>
                <h1>{t("about.title")}</h1>
                <div className={classes.aboutBlock}>
                    <div className={classes.text} data-aos="fade-left" data-aos-duration="1500">
                        <img src={logo} alt="logo" className={classes.logoAbout}/>
                        <p>
                            {t("about.text.one")}&nbsp;
                            <a href="https://www.profi-space.com/" target="_blank" rel="noreferrer nofollow">PROFI Space</a>.&nbsp;
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
                <div className={classes.who} data-aos="fade-down" data-aos-duration="1500">
                    <h3>{t("who.title")}</h3>
                    <p>{t("who.subtitle")}</p>
                    <ul>
                        <li>
                            <img src={circle} alt="marker"/>
                            <span>{t("who.points.one")}</span>
                        </li>
                        <li>
                            <img src={circle} alt="marker"/>
                            <span>{t("who.points.two")}</span>
                        </li>
                        <li>
                            <img src={circle} alt="marker"/>
                            <span>{t("who.points.three")}</span>
                        </li>
                        <li>
                            <img src={circle} alt="marker"/>
                            <span>{t("who.points.four")}</span>
                        </li>
                        <li>
                            <img src={circle} alt="marker"/>
                            <span>{t("who.points.five")}</span>
                        </li>
                        <li>
                            <img src={circle} alt="marker"/>
                            <span>{t("who.points.six")}</span>
                        </li>
                    </ul>
                </div>
                <div className={classes.butContainer} data-aos="zoom-in" data-aos-duration="1000">
                    <CustomButton onClick={handleRegister} text={t("action.register")} className={classes.whoBut}/>
                </div>
            </Container>
            <div className={classes.what}>
                <Container className={classes.whatContainer}>
                    <h3 data-aos="fade-down" data-aos-duration="1500">{t("what.title")}</h3>
                    <div className={classes.whatPoints} data-aos="fade-down" data-aos-duration="1500">
                        <span>{t("what.points.one")}</span>
                        <span>{t("what.points.two")}</span>
                        <span>{t("what.points.three")}</span>
                        <span>{t("what.points.four")}</span>
                        <span>{t("what.points.five")}</span>
                        <span>{t("what.points.six")}</span>
                        <span>{t("what.points.seven")}</span>
                        <span>{t("what.points.eight")}</span>
                        <span>{t("what.points.nine")}</span>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1000">
                        <CustomButton onClick={handleShedule} className={classes.sheduleBut} text={t("action.shedule")}/>
                    </div>
                </Container>
            </div>
            <div className={classes.speakers} ref={speakersRef}>
                <h2 data-aos="fade-down" data-aos-duration="1500">{t("speakers.title")}</h2>
                <Container className={classes.speakersContainer} >
                    {speakers.map(item => <Speaker speaker={item} key={item.id} onClick={setCurrentSpeaker}/>)}
                </Container>
            </div>
            <div className={classes.payment} data-aos="fade-down" data-aos-duration="1500">
                <Container>
                    <h3>{t("payment.title")}</h3>
                    <p>{t("payment.before")} - 2000 грн / <br/> $70</p>
                    <p>{t("payment.after")} - 2500 грн / <br/> $90</p>
                    <Button className={classes.payBut}>
                        <a href={paymentLink} target="_blank" rel="noreferrer nofollow">{t("action.pay")}</a>
                    </Button>
                    <CustomButton onClick={handleRegister} text={t("action.register")} className={classes.whoBut}/>
                </Container>
            </div>
            <div className={classes.footer} data-aos="fade" data-aos-duration="1500">
                <h3>{t("footer.title")}</h3>
                <div className={classes.links}>
                    <a href="https://www.facebook.com/profispaceschool/" target="_blank" rel="noreferrer nofollow">
                        <FacebookIcon/>
                    </a>
                    <a href="https://www.instagram.com/profi_business_school/" target="_blank" rel="noreferrer nofollow">
                        <InstagramIcon/>
                    </a>
                    <a href="https://t.me/profi_space" target="_blank" rel="noreferrer nofollow">
                        <TelegramIcon/>
                    </a>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    isFetching: state.common.isFetching,
    isSuccess: state.common.isSuccess,
    currentLanguage: state.common.currentLanguage
})

export default connect(mapStateToProps, {
    setCurrentLanguage
})(Main)
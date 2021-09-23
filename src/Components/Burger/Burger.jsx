import { Button, Drawer, IconButton } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './Burger.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { connect } from 'react-redux';
import { setCurrentLanguage } from '../../Redux/commonReducer';

const Burger = (props) => {
    const { t, i18n } = useTranslation()

    const handleChangeLanguage = (language) => {
        i18n.changeLanguage(language)
        props.setCurrentLanguage(language)
    }

    const anchor = 'right'

    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    const handleAbout = () => {
        if(props.aboutRef.current){
            handleOpen()
            setTimeout(function(){props.aboutRef.current.scrollIntoView()}, 500)
        }
    }

    const handleShedule = () => {
        handleOpen()
        props.handleShedule()
    }

    const handleSpeakers = () => {
        if(props.speakersRef.current){
            handleOpen()
            setTimeout(function(){props.speakersRef.current.scrollIntoView()}, 500)
        }
    }

    return(
        <div className={classes.main}>
            <div className={classes.burger}>
                <IconButton onClick={handleOpen}>
                    <MenuIcon/>
                </IconButton>
            </div>
            <Drawer anchor={anchor} open={isOpen} onClose={handleOpen} className={classes.body} classes={{ paper: classes.body }}>
                <IconButton onClick={handleOpen} className={classes.closeBut}>
                    <CloseIcon/>
                </IconButton>
                <div className={classes.menuItems}>
                    <button onClick={handleAbout}>{t("navbar.one")}</button>
                    <button onClick={handleShedule}>{t("navbar.two")}</button>
                    <button onClick={handleSpeakers}>{t("navbar.three")}</button>
                </div>
                <div className={classes.footer}>
                    <Button onClick={() => handleChangeLanguage("ru")} className={props.currentLanguage === "ru" ? classes.activeLang : undefined}>RU</Button>
                    <Button onClick={() => handleChangeLanguage("ua")} className={props.currentLanguage === "ua" ? classes.activeLang : undefined}>UA</Button>
                </div>
            </Drawer>
        </div>
    )
}

let mapStateToProps = (state) => ({
    currentLanguage: state.common.currentLanguage
})

export default connect(mapStateToProps, {
    setCurrentLanguage
})(Burger)
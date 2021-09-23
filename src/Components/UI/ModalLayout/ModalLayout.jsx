import { useEffect } from 'react'
import { IconButton } from '@mui/material'
import classes from './ModalLayout.module.css'
import CloseIcon from '@mui/icons-material/Close';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { cx } from '../../../Utils/classes';

const ModalLayout = (props) => {
    const { header, onClick, children, className } = props

    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    return(
        <div className={classes.main} data-aos="fade" data-aos-duration="300">
            <div className={cx(classes.window, className)} data-aos="zoom-in" data-aos-duration="200">
                <div className={classes.header}>
                    <h5>{header}</h5>
                    <IconButton onClick={onClick}>
                        <CloseIcon/>
                    </IconButton>
                </div>
                <div className={classes.body}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ModalLayout
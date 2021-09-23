import React from 'react'
import ModalLayout from '../../UI/ModalLayout/ModalLayout'
import classes from './ModalSpeaker.module.css'

const ModalSpeaker = (props) => {
    const { speaker, onClick } = props

    const handleModal = () => {
        onClick(null)
    }

    return(
        <ModalLayout header={speaker.subtitle} onClick={handleModal}>
            {speaker.points.map(item => {
                return(
                    <div className={classes.point} key={item.id}>
                        <div className={classes.imgContainer}>
                            <img src={item.icon} alt="icon"/>
                        </div>
                        <span>{item.text}</span>
                    </div>
                )
            })}
        </ModalLayout>
    )
}

export default ModalSpeaker
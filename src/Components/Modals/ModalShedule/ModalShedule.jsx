import { useTranslation } from 'react-i18next'
import { useShedule } from '../../../Hooks/useShedule'
import ModalLayout from '../../UI/ModalLayout/ModalLayout'
import classes from './ModalShedule.module.css'
import circle from '../../../Assets/circle.svg'

const ModalShedule = (props) => {
    const { onClick } = props

    const shedule = useShedule()

    const handleModal = () => {
        onClick(false)
    }

    const { t } = useTranslation()

    return(
        <ModalLayout header={t("modalShedule.title")} onClick={handleModal}>
            <div className={classes.points}>
                {shedule.map(item => {
                    return(
                        <div className={classes.point} key={item.key}>
                            <p>{item.title}</p>
                            {item.points.map(point => {
                                return(
                                    <div className={classes.text}>
                                        <img src={circle} alt="marker"/>
                                        <span>{point}</span>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </ModalLayout>
    )
}

export default ModalShedule
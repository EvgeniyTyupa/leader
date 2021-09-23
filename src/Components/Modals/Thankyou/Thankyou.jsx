import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'
import ModalLayout from '../../UI/ModalLayout/ModalLayout'
import classes from './Thankyou.module.css'

const Thankyou = (props) => {
    const { onClick } = props

    const history = useHistory()

    const handleModal = () => {
        onClick(false)
        history.push("/")
    }

    const { t } = useTranslation()

    return(
        <ModalLayout header={""} onClick={handleModal} className={classes.window}>
            <p className={classes.text}>{t("thankyou")}</p>
        </ModalLayout>
    )
}

export default Thankyou
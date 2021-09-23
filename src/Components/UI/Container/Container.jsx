import { cx } from "../../../Utils/classes"
import classes from "./Container.module.css"

const Container = (props) => {
    const { className } = props

    return(
        <div className={cx(classes.main, className)}>
            {props.children}
        </div>
    )
}

export default Container
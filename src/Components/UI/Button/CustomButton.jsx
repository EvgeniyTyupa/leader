import { Button } from "@mui/material"
import { cx } from "../../../Utils/classes"
import classes from "./CustomButton.module.css"

const CustomButton = (props) => {
    const { text, className, onClick } = props

    return(
        <Button className={cx(classes.main, className)} onClick={onClick}>{text}</Button>
    )
}

export default CustomButton
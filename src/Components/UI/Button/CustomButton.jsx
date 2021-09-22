import { Button } from "@mui/material"
import { cx } from "../../../Utils/classes"
import classes from "./CustomButton.module.css"

const CustomButton = (props) => {
    const { text, className } = props

    return(
        <Button className={cx(classes.main, className)}>{text}</Button>
    )
}

export default CustomButton
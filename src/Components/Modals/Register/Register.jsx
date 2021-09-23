import { makeStyles } from '@material-ui/styles'
import { Button, TextField } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { saveToGoogleTable } from '../../../Redux/commonReducer'
import ModalLayout from '../../UI/ModalLayout/ModalLayout'
import classes from './Register.module.css'

const useStyles = makeStyles((theme) => ({
    root:{
        '& label.Mui-focused': {
            color: '#e32a00'
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#e32a00' 
        },
        '& .MuiOutlinedInput-root': {
            borderRadius: 0
        },
        '& .MuiFormHelperText-root.Mui-error': {
            margin: 0,
            marginTop: 5
        }
    }
}));

const Register = (props) => {
    const { onClick, userUrl } = props

    const material = useStyles()

    const { handleSubmit, control, reset } = useForm()

    const onSubmit = (data) => {
        data.url = userUrl
        data.email = data.email.toLowerCase()

        props.saveToGoogleTable(data)

        reset({
            name: "",
            phone: "",
            email: ""
        })
    }

    const { t } = useTranslation()

    return(
        <ModalLayout header={t("action.register")} onClick={onClick} className={classes.window}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={classes.field}>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{ required: t("errors.required") }}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                error={!!error}
                                helperText={error ? error.message : null}
                                classes={material}
                                label={t("form.name")}
                                variant="outlined"
                                onChange={onChange}
                                value={value}
                                autoComplete="off"
                            />
                        )}
                    />
                </div>
                <div className={classes.field}>
                    <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        rules={{ 
                            required: {
                                value: true,
                                message: t("errors.required")
                            },
                            pattern: {
                                value: /^[0-9+]\d{9,13}$/,
                                message: t("errors.phone")
                            }
                        }}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                error={!!error}
                                helperText={error ? error.message : null}
                                classes={material}
                                label={t("form.phone")}
                                variant="outlined"
                                onChange={onChange}
                                value={value}
                                autoComplete="off"
                            />
                        )}
                    />
                </div>
                <div className={classes.field}>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{ 
                            required: {
                                value: true,
                                message: t("errors.required")
                            },
                            pattern: {
                                value: /^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/,
                                message: "Неправильный email!"
                            }
                        }}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                error={!!error}
                                helperText={error ? error.message : null}
                                classes={material}
                                label={t("form.email")}
                                variant="outlined"
                                onChange={onChange}
                                value={value}
                                autoComplete="off"
                            />
                        )}
                    />
                </div>
                <Button type="submit">{t("action.register")}</Button>
            </form>
        </ModalLayout>
    )
}

export default connect(null, {
    saveToGoogleTable
})(Register)
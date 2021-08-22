import React from 'react'
import {createUseStyles, useTheme} from 'react-jss'

function SignupButton() {
    const theme = useTheme()
    const classes = useStyles({theme})

    return (
        <button className={classes.btnEventSignup} type="button">
            SIGN UP
        </button>
    )
}

const useStyles = createUseStyles((theme) => ({
    btnEventSignup: {
        width: '270px',
        height: '47px',
        border: '0',
        borderRadius: '30px',
        color: '#ffffff',
        backgroundColor: theme.colorPrimary,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.colorPrimaryHover,
        },
    },
}))

export default SignupButton

import React from 'react'
import {createUseStyles, useTheme} from 'react-jss'

function SignupButton({href}) {
    const theme = useTheme()
    const classes = useStyles({theme})

    return (
        <a onClick={(e) => e.stopPropagation()} href={href} className={classes.btnEventSignup}>
            Sign Up
        </a>
    )
}

const useStyles = createUseStyles((theme) => ({
    btnEventSignup: {
        height: 48,
        borderRadius: 24,
        color: '#ffffff',
        backgroundColor: theme.colorPrimary,
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: '1.8rem',
        padding: 10,
        '&:hover': {
            backgroundColor: theme.colorPrimaryHover,
        },
    },
}))

export default SignupButton

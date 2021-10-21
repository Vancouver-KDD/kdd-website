import React from 'react'
import {createUseStyles} from 'react-jss'

function SignupButton({href}) {
    const classes = useStyles({})

    return (
        <a onClick={(e) => e.stopPropagation()} href={href} className={classes.btnEventSignup}>
            Sign Up
        </a>
    )
}

const useStyles = createUseStyles(() => ({
    btnEventSignup: {
        height: 48,
        borderRadius: 24,
        color: '#ffffff',
        backgroundColor: 'hsl(343, 91%, 56%)',
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: '1.8rem',
        padding: 10,
        textAlign: 'center',
        '&:hover': {
            backgroundColor: 'hsl(343, 87%, 61%)',
        },
    },
}))

export default SignupButton

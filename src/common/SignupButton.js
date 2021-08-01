import React from 'react'
import {createUseStyles} from 'react-jss'

function SignupButton(props) {
    const classes = useStyles({...props})

    return (
        <button className={classes.btnEventSignup} type="button">
            SIGN UP
        </button>
    )
}

const useStyles = createUseStyles(() => ({
    btnEventSignup: {
        width: '270px',
        height: '48px',
        border: '0',
        borderRadius: '30px',
        color: '#ffffff',
        backgroundColor: '#F52763',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#F57729',
        },
    },
}))

export default SignupButton

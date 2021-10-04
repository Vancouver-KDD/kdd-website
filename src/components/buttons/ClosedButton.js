import React from 'react'
import {createUseStyles, useTheme} from 'react-jss'
import { Button } from './Button'

function ClosedButton() {
    const theme = useTheme()
    const classes = useStyles({theme})

    return (
        <a href={void(0)} className={classes.btnEventClose}>
            Closed
        </a>
    )
}

const useStyles = createUseStyles((theme) => ({
    btnEventClose: {
        height: 48,
        borderRadius: 24,
        color: '#ffffff',
        backgroundColor: '#9e9e9e',
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: '1.8rem',
        pointerEvents: 'none',
        padding: 10,
        textAlign: 'center'
    },
}))

export default ClosedButton

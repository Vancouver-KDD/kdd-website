import React from 'react'
import {createUseStyles, useTheme} from 'react-jss'

function ClosedButton() {
    const theme = useTheme()
    const classes = useStyles({theme})

    return <span className={classes.btnEventClose}>Closed</span>
}

const useStyles = createUseStyles(() => ({
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
        textAlign: 'center',
        width: '100%',
        fontWeight: '500',
    },
}))

export default ClosedButton

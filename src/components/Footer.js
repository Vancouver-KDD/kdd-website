import React from 'react'
import {createUseStyles, useTheme} from 'react-jss'

const useStyles = createUseStyles({
    footer: {
        height: 'auto',
        padding: '1rem',
        '& p': {
            textAlign: 'left',
        },
        color: 'hsla(240, 52%, 11%, 1)',
    },
    text_developer: {
        fontWeight: '600',
        fontSize: '2rem',
    },
    text_specialist: {
        fontWeight: '600',
        fontSize: '2rem',
    },
})

function Footer(props) {
    const theme = useTheme()
    const classes = useStyles({...props, theme})
    return (
        <footer className={classes.footer}>
            <p className={classes.text_developer}>Developed Eric Kim ABC 123 DDD event_date</p>
            <p className={classes.text_specialist}>Special thanks to PM Coordinator Mentors CCC</p>
        </footer>
    )
}

export default Footer

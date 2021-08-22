import React from 'react'
import {createUseStyles, useTheme} from 'react-jss'

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

const useStyles = createUseStyles({
    footer: {
        height: 'auto',
        padding: '1rem',
        color: 'hsla(240, 52%, 11%, 1)',
        '& p': {
            textAlign: 'left',
        },
        '@media (min-width: 800px)': {
            padding: '3rem',
            '& p': {
                textAlign: 'center',
            },
        },
        '@media (min-width: 1024px)': {
            padding: '6rem',
            '& p': {
                textAlign: 'center',
            },
        },
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

export default Footer

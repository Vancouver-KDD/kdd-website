import React from 'react'
import {createUseStyles, useTheme} from 'react-jss'

function Footer(props) {
    const theme = useTheme()
    const classes = useStyles({...props, theme})
    return (
        <footer className={classes.footer}>
            <p>Developed     
                <a href="#">Eric Kim</a>
                <a href="#">ABC</a>
                <a href="#">123</a>
                <a href="#">DDD</a>
                <a href="#">event_date</a>
            </p>
            <p>Special thanks to 
                <a href="#">PM</a>
                <a href="#">Coordinator</a>
                <a href="#">Mentors</a>
                <a href="#">CCC</a>
            </p>
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
            fontWeight: '600',
            fontSize: '1.2rem',
        },
        '& a': {
            padding: '0.5rem',
            fontWeight: '600',
            fontSize: '1.2rem',
        },
        '@media (min-width: 800px)': {
            padding: '3rem',
            '& p': {
                textAlign: 'center',
                fontSize: '1.6rem',
            },
            '& a': {
                padding: '0.5rem',
                fontSize: '1.6rem',
            },
        },
        '@media (min-width: 1024px)': {
            padding: '6rem',
            '& p': {
                textAlign: 'center',
                fontSize: '2rem',
            },
            '& a': {
                padding: '1rem',
                fontSize: '2rem',
            },
        },
    },
})

export default Footer

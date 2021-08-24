import React from 'react'
import {Link} from 'react-router-dom'
import {createUseStyles} from 'react-jss'

export default function Footer() {
    const classes = useStyles()
    return (
        <footer className={classes.footer}>
            <p>
                Developed
                <a href="https://www.linkedin.com/in/bosung90">Eric Kim</a>
                <Link to="#">ABC</Link>
                <Link href="#">123</Link>
                <Link href="#">DDD</Link>
                <Link href="#">event_date</Link>
            </p>
            <p>
                Special thanks to
                <Link href="#">PM</Link>
                <Link href="#">Coordinator</Link>
                <Link href="#">Mentors</Link>
                <Link href="#">CCC</Link>
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

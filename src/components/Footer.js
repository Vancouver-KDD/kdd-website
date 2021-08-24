import React from 'react'
import {createUseStyles} from 'react-jss'

export default function Footer() {
    const classes = useStyles()
    return (
        <footer className={classes.footer}>
            <p>
                Developed
                <a href="//www.linkedin.com/company/vancouver-kdd/">Eric Kim</a>
                <a href="//www.linkedin.com/company/vancouver-kdd/">ABC</a>
                <a href="//www.linkedin.com/company/vancouver-kdd/">123</a>
                <a href="//www.linkedin.com/company/vancouver-kdd/">DDD</a>
                <a href="//www.linkedin.com/company/vancouver-kdd/">event_date</a>
            </p>
            <p>
                Special thanks to
                <a href="//www.linkedin.com/company/vancouver-kdd/">PM</a>
                <a href="//www.linkedin.com/company/vancouver-kdd/">Coordinator</a>
                <a href="//www.linkedin.com/company/vancouver-kdd/">Mentors</a>
                <a href="//www.linkedin.com/company/vancouver-kdd/">CCC</a>
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

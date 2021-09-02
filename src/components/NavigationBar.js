import React from 'react'
import classnames from 'classnames'
import {Link} from 'react-router-dom'
import {createUseStyles, useTheme} from 'react-jss'
import kddLogo1 from 'assets/images/KDD-Logo1.svg'
import kddLogo2 from 'assets/images/KDD-Logo2.svg'

export default function NavigationBar() {
    const pathname = window.location.pathname
    const theme = useTheme()
    const classes = useStyles({theme})
    let isHome = true
    let navPosition = 'navAbsolute'
    if (pathname !== '/') {
        isHome = false
        navPosition = 'navRelative'
    }

    return (
        <nav className={classnames(classes.default, classes[navPosition])}>
            <div className={classes.defaultContent}>
                <Link to="/">
                    <img src={isHome ? kddLogo1 : kddLogo2} alt="KDD logo" />
                </Link>
                <ul className={classes.nav_menu}>
                    <li>
                        <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                    <li>
                        <Link to="/photos">Photos</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

const useStyles = createUseStyles(() => ({
    default: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
        paddingTop: 40,
        zIndex: 1000,
        width: '100%',
        '& a': {
            textDecoration: 'none',
            fontSize: '1.5rem',
            fontWeight: '700',
        },
    },
    defaultContent: {
        display: 'flex',
        flexDirection: 'column-reverse',
        width: 1024,
        alignItems: 'center',
        maxWidth: '100%',
        justifyContent: 'space-between',
        height: 174,
        '@media (min-width: 375px)': {
            flexDirection: 'row',
            alignItems: 'flex-start',
        },
    },
    navAbsolute: {
        position: 'absolute',
        '& a': {
            color: '#ffffff',
        },
    },
    navRelative: {
        position: 'relative',
        '& a': {
            color: '#0E0E2C',
        },
    },
    nav_menu: {
        display: 'flex',
        justifyContent: 'space-between',
        width: 240,
        '& li:hover': {
            textDecoration: 'underline',
        },
    },
}))

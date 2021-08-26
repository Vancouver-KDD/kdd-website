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
        padding: '1rem',
        paddingTop: '3rem',
        zIndex: 1000,
        height: 170,
        width: '100vw',
        '& a': {
            textDecoration: 'none',
            fontSize: '1.5rem',
            fontWeight: '700',
        },
    },
    defaultContent: {
        display: 'flex',
        width: 1024,
        alignItems: 'flex-start',
        maxWidth: '100vw',
        justifyContent: 'space-between',
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
        width: 160,
        '& li:hover': {
            textDecoration: 'underline',
        },
    },
}))

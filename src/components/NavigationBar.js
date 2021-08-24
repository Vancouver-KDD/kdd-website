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
            <div>
                <Link className={classes.nav_logo} to="/">
                    {isHome ? <img src={kddLogo1} alt="KDD logo" /> : <img src={kddLogo2} alt="KDD logo" />}
                </Link>
            </div>
            <ul className={classes.nav_menu}>
                <li>
                    <Link to="/about-us">About Us</Link>
                </li>
                <li>
                    <Link to="/photos">Photos</Link>
                </li>
            </ul>
        </nav>
    )
}

const useStyles = createUseStyles(() => ({
    default: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        paddingTop: '3rem',
        zIndex: 1000,
        height: 170,
        display: 'flex',
        width: '100%',
        '& a': {
            textDecoration: 'none',
            fontSize: '1.5rem',
            fontWeight: '700',
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
    nav_logo: {
        position: 'relative',
        top: 0,
        left: 0,
        marginLeft: -62,
    },
    nav_menu: {
        position: 'relative',
        top: 0,
        display: 'flex',
        justifyContent: 'space-between',
        width: 160,
        '& li:hover': {
            textDecoration: 'underline',
        },
    },
}))

import React from 'react'
import classnames from 'classnames'
import {Link} from 'react-router-dom'
import {createUseStyles, useTheme} from 'react-jss'
import kddLogo1 from 'assets/images/KDD-Logo1.svg'
import kddLogo2 from 'assets/images/KDD-Logo2.svg'

// eslint-disable-next-line react/prop-types
const NavigationBar = ({pathname}) => {
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
                    <Link to="/events">Events</Link>
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
        height: '250px',
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: '1rem',
        flexDirection: 'column',
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
        position: 'absolute',
        top: '110px',
        left: '50%',
        marginLeft: '-62px',
    },
    nav_menu: {
        position: 'absolute',
        top: '50px',
        display: 'flex',
        justifyContent: 'space-between',
        width: '80%',
        '& li:hover': {
            textDecoration: 'underline',
        },
    },
    '@media (min-width: 768px)': {
        default: {
            height: '170px',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            paddingTop: '3rem',
        },
        nav_logo: {
            position: 'relative',
            top: '0px',
            left: '0px',
        },
        nav_menu: {
            position: 'relative',
            top: '0px',
            width: '300px',
        },
    },
}))

export default NavigationBar

import React from 'react'
import {Link} from 'react-router-dom'
import {createUseStyles, useTheme} from 'react-jss'
import kddLogo1 from 'assets/images/KDDLogo.png'

function NavigationBar(props) {
    const theme = useTheme()
    const classes = useStyles({...props, theme})

    return (
        <nav className={classes.nav}>
            <ul className={classes.nav_menu}>
                <li>
                    <a href="/about-us">About Us</a>
                </li>
                <li>
                    <a href="/events">Events</a>
                </li>
                <li>
                    <a href="/photos">Photos</a>
                </li>
            </ul>
            <div>
                <Link className={classes.nav_logo} to="/">
                    <img src={kddLogo1} alt="KDD logo" />
                </Link>
            </div>
        </nav>
    )
}

const useStyles = createUseStyles(() => ({
    nav: {
        height: '250px',
        display: 'flex',
        position: 'absolute',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: '1rem',
        flexDirection: 'column',
        '& a': {
            textDecoration: 'none',
            color: '#ffffff',
            fontSize: '1.5rem',
        },
    },
    nav_logo: {
        position: 'relative',
    },
    nav_menu: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '80%',
        '& li:hover': {
            textDecoration: 'underline',
        },
    },
}))

export default NavigationBar

import React from 'react'
import {Link} from 'react-router-dom'
import {createUseStyles} from 'react-jss'
import kddLogo1 from 'assets/images/KDDLogo.png'

function NavigationBar(props) {
    const classes = useStyles({...props, })

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
            <Link className={classes.nav_logo} to="/">
                <img src={kddLogo1} alt="KDD logo" />
            </Link>
        </nav>
    )
}

const useStyles = createUseStyles(() => ({
    nav: {
        height: '100px',
        display: 'flex',
        position: 'absolute',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: '2rem',
        flexDirection: 'column',
        '& a': {
            textDecoration: 'none',
            color: '#fff',
            fontSize: '1.5rem',
        },
    },
    nav_logo: {
        position: 'absolute',
        marginTop: '220px',
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

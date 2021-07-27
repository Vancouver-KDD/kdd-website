/* eslint-disable */
import React from 'react'
import {createUseStyles, useTheme} from 'react-jss'
import {Hero} from 'components/Hero'
import Footer from 'components/Footer'
import {Link} from 'react-router-dom'
import kddLogo from 'assets/images/KDDLogo.png'

const useStyles = createUseStyles((theme) => ({
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
            color: 'white',
            fontSize: '1.5rem',
        },
    },
    nav_logo: {
        position: 'absolute',
        marginTop: '25rem',
    },
    nav_menu: {
        display: 'flex',
        '& li': {
            padding: '8px 50px',
            '&:hover': {
                textDecoration: 'underline'
            },
        },
    },
}))

function Homepage(props) {
    const theme = useTheme()
    const classes = useStyles({...props, theme})

    return (
        <div>
            <nav className={classes.nav}>
                <Link className={classes.nav_logo} to="/">
                    <img src={kddLogo} alt="KDD logo" />
                </Link>
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
            </nav>
            <Hero />
            <Footer />
        </div>
    )
}

export default Homepage

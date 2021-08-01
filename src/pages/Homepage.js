/* eslint-disable */
import React from 'react'
import {Link} from 'react-router-dom'
import {createUseStyles, useTheme} from 'react-jss'
import kddLogo from 'assets/images/KDDLogo.png'
import {Hero} from 'components/Hero'
import EventCards from 'components/EventCards'
import Footer from 'components/Footer'
import NavigationBar from 'components/NavigationBar'

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

function Homepage(props) {
    const theme = useTheme()
    const classes = useStyles({...props, theme})

    return (
        <div>
            <NavigationBar />
            <Hero />
            <EventCards />
            <Footer />
        </div>
    )
}

export default Homepage

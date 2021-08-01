/* eslint-disable */
import React from 'react'
import {createUseStyles, useTheme} from 'react-jss'
import {Hero} from 'components/Hero'
import EventCards from 'components/EventCards'
import Footer from 'components/Footer'
import NavigationBar from 'components/NavigationBar'
import {Sponsor} from 'components/Sponsor'
import ellipse from 'assets/images/ellipse.svg'

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
        top: '130px',
    },
    nav_menu: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '80%',
        '& li:hover': {
            textDecoration: 'underline',
        },
    },
    divider: {
        transform: 'translateY(-86px)',
        width: '100%',
        height: '100px',
        position: 'absolute',
    },
    stat: {
        height: '543px',
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
            <img className={classes.divider} src={ellipse} />
            <div className={classes.stat} />
            <Sponsor />
            <Footer />
        </div>
    )
}

export default Homepage

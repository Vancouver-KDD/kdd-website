/* eslint-disable */
import React from 'react'
import {createUseStyles, useTheme} from 'react-jss'
import {Hero} from 'components/Hero'
import {Sponsor} from 'components/Sponsor'
import EventCards from 'components/EventCards'
import PhotoCards from 'components/PhotoCards'
import Footer from 'components/Footer'
import ellipse from 'assets/images/ellipse.svg'
import NavigationBar from 'components/NavigationBar'
import {Stat} from 'components/Stat'

const Homepage = () => {
    const theme = useTheme()
    const classes = useStyles({theme})

    return (
        <div>
            <NavigationBar pathname={location.pathname} />
            <Hero />
            <img className={classes.divider} src={ellipse} />
            <div className={classes.stat} />
            <Stat />
            <Sponsor />
            <EventCards />
            <PhotoCards />
            <Footer />
        </div>
    )
}

const useStyles = createUseStyles(() => ({
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

export default Homepage

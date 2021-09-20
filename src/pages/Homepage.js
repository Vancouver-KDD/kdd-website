import React from 'react'
import Hero from 'components/Hero'
import Sponsor from 'components/Sponsor'
import PhotoCards from 'components/PhotoCards'
import Footer from 'components/Footer'
import NavigationBar from 'components/NavigationBar'
import Stat from 'components/Stat'
import Contact from 'components/Contact'
import Event from 'components/Event'

export default function Homepage() {
    return (
        <>
            <NavigationBar />
            <Hero />
            <Stat />
            <Sponsor />
            <Event/>
            <PhotoCards />
            <Contact />
            <Footer />
        </>
    )
}

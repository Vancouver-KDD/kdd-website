import React from 'react'
import Hero from 'components/Hero'
import Sponsor from 'components/Sponsor'
import EventCards from 'components/EventCards'
import PhotoCards from 'components/PhotoCards'
import Footer from 'components/Footer'
import NavigationBar from 'components/NavigationBar'
import Stat from 'components/Stat'

export default function Homepage() {
    return (
        <div>
            <NavigationBar />
            <Hero />
            <Stat />
            <Sponsor />
            <EventCards />
            <PhotoCards />
            <Footer />
        </div>
    )
}

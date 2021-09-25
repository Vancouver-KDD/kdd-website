import React from 'react'
import Hero from 'components/Hero'
import Sponsor from 'components/Sponsor'
import PhotoCards from 'components/PhotoCards'
import Footer from 'components/Footer'
import NavigationBar from 'components/NavigationBar'
import Stat from 'components/Stat'
import Contact from 'components/Contact'
import HomeEvent from 'components/HomeEvent'

export default function HomePage() {
    return (
        <>
            <NavigationBar />
            <Hero />
            <Stat />
            <Sponsor />
            <HomeEvent />
            <PhotoCards />
            <Contact />
            <Footer />
        </>
    )
}

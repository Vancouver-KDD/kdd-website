import React from 'react'
import NavigationBar from 'components/NavigationBar'
import Footer from 'components/Footer'
import Hero from './Hero'
import Sponsors from './Sponsors'
import HomePhotos from './HomePhotos'
import Stats from './Stats'
import ContactUs from './ContactUs'
import HomeEvent from './HomeEvent'

export default function HomePage() {
    return (
        <>
            <NavigationBar />
            <Hero />
            <Stats />
            <Sponsors />
            <HomeEvent />
            <HomePhotos />
            <ContactUs />
            <Footer />
        </>
    )
}

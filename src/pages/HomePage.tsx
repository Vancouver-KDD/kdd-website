import React from 'react'
import NavigationBar from 'components/NavigationBar'
import Footer from 'components/Footer'
import Hero from './HomePage/Hero'
import Sponsors from './HomePage/Sponsors'
import HomePhotos from './HomePage/HomePhotos'
import Stats from './HomePage/Stats'
import ContactUs from './HomePage/ContactUs'
import HomeEvent from './HomePage/HomeEvent'

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

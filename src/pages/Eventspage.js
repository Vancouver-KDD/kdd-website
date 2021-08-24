import React from 'react'
import EventCards from 'components/EventCards'
import NavigationBar from 'components/NavigationBar'
import Footer from 'components/Footer'

export default function Eventspage() {
    return (
        <div>
            <NavigationBar />
            <EventCards />
            <Footer />
        </div>
    )
}

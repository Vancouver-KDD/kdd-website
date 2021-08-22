import React from 'react'
import EventCards from 'components/EventCards'
import NavigationBar from 'components/NavigationBar'
import Footer from 'components/Footer'

const Eventspage = () => {
    return (
        <div>
            <NavigationBar />
            <EventCards />
            <Footer />
        </div>
    )
}

export default Eventspage

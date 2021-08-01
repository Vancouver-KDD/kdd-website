import React from 'react'
import EventCard from 'components/EventCard'
import NavigationBar from 'components/NavigationBar'

function Eventspage() {
    return (
        <div>
            <NavigationBar />
            <EventCard />
            <EventCard />
            <EventCard />
        </div>
    )
}

export default Eventspage

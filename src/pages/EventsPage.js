import React from 'react'
import {createUseStyles} from 'react-jss'
import EventCard from 'components/EventCard'
import NavigationBar from 'components/NavigationBar'
import Footer from 'components/Footer'
import {Space} from 'components'
import {useCollection} from 'store'
import moment from 'moment'
import NoUpcomingEventCard from 'components/NoUpcomingEventCard'

export default function EventsPage() {
    const classes = useStyles()
    const {data} = useCollection({name: 'events'})
    const pastEvents = []
    const upcomingEvents = []
    const currentDate = moment()
    data?.forEach?.((event) => {
        if (currentDate.isSameOrAfter(event.date)) {
            pastEvents.push(event)
        } else {
            upcomingEvents.push(event)
        }
    })

    return (
        <>
            <NavigationBar />
            <Space y1={50} y2={75} />
            <div className={classes.container}>
                <div className={classes.events}>
                    {upcomingEvents && <EventSection data={upcomingEvents} label="Upcoming Events" />}
                    {pastEvents && <EventSection data={pastEvents} label="Past Events" />}
                </div>
            </div>
            <Footer />
        </>
    )
}

function Label({text}) {
    const classes = useStyles()

    return (
        <div className={classes.labelContainer}>
            <h1>{text}</h1>
            <Space y1={10} y2={15} />
            <div className={classes.labelLine} />
        </div>
    )
}

const useStyles = createUseStyles((theme) => ({
    labelContainer: {display: 'flex', flexDirection: 'column', alignItems: 'center'},
    labelLine: {height: 2, backgroundColor: theme.colorPrimary, width: 143},
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    events: {
        width: 1024,
        maxWidth: '100%',
        textAlign: 'center',
        '& h1': {
            fontSize: 'clamp(36px, calc(1.85vw + 29px), 48px)',
        },
    },
}))

function EventSection({data, label}) {
    return (
        <>
            <Label text={label} />
            {!data?.[0] ? (
                <>
                    <Space y1={25} y2={50} />
                    <NoUpcomingEventCard label={label} />
                    <Space y1={15} y2={20} />
                </>
            ) : (
                data?.map?.((event) => (
                    <React.Fragment key={event.id}>
                        <Space y1={25} y2={50} />
                        {label === 'Past Events' ? <EventCard {...event} /> : <EventCard {...event} />}
                        <Space y1={15} y2={20} />
                    </React.Fragment>
                ))
            )}
        </>
    )
}

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

    const pastEvents = data?.filter((event) => {
        const currentDate = moment()
        const isPastEvent = currentDate.isSameOrAfter(event.date)

        return isPastEvent
    })

    const upcomingEvents = data?.filter((event) => {
        const currentDate = moment()
        const isUpcomingEvent = currentDate.isSameOrBefore(event.date)

        return isUpcomingEvent
    })

    return (
        <>
            <NavigationBar />
            <Space y1={50} y2={75} />
            <div className={classes.container}>
                <div className={classes.events}>
                    <UpcomingEventSection data={upcomingEvents} label="Upcoming Events" isUpcomingEvent />
                    <PastEventSection data={pastEvents} label="Past Events" isPastEvent />
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

function PastEventSection({data, label, isPastEvent}) {
    return (
        <>
            <Label text={label} />
            {data?.map((event) => (
                <React.Fragment key={event.id}>
                    <Space y1={25} y2={50} />
                    <EventCard {...event} isPastEvent={isPastEvent} />
                    <Space y1={15} y2={20} />
                </React.Fragment>
            ))}
        </>
    )
}

function UpcomingEventSection({data, label, isUpcomingEvent}) {
    return (
        <>
            <Label text={label} />
            {!data?.[0] ? (
                <>
                    <Space y1={25} y2={50} />
                    <NoUpcomingEventCard />
                    <Space y1={15} y2={20} />
                </>
            ) : (
                data?.map((event) => (
                    <React.Fragment key={event.id}>
                        <Space y1={25} y2={50} />
                        <EventCard {...event} isUpcomingEvent={isUpcomingEvent} />
                        <Space y1={15} y2={20} />
                    </React.Fragment>
                ))
            )}
        </>
    )
}

import React from 'react'
import {Section, Footer, NoUpcomingEventCard, EventCard, NavigationBar} from 'components'
import {useCollection} from 'store'
import moment from 'moment'
import {Stack, Typography} from '@mui/material'
import type {EventType} from 'types'

export default function EventsPage() {
    const {data} = useCollection({name: 'events'})
    const pastEvents: Array<EventType> = []
    const upcomingEvents: Array<EventType> = []
    const currentDate = moment()
    data?.forEach?.((event) => {
        const isPastEvent = currentDate.isSameOrAfter(event.date)
        if (isPastEvent) {
            pastEvents.push(event)
        } else {
            upcomingEvents.push(event)
        }
    })

    return (
        <>
            <NavigationBar />
            <Section gap={8} mt={5}>
                <EventSection data={upcomingEvents} label="Upcoming Events" isPastEvent={false} />
                <EventSection data={pastEvents} label="Past Events" isPastEvent />
            </Section>
            <Footer />
        </>
    )
}

function Label({text}: {text: string}) {
    return (
        <Stack alignItems="center" gap={2}>
            <Typography variant="h4" fontWeight="700">
                {text}
            </Typography>
            <Stack sx={{height: 2, backgroundColor: 'hsl(343, 91%, 56%)', width: 143}} />
        </Stack>
    )
}

function EventSection({data, label, isPastEvent}: {data: Array<EventType>; label: string; isPastEvent: boolean}) {
    return (
        <Stack gap={5}>
            <Label text={label} />
            {!isPastEvent && !data?.[0] ? (
                <NoUpcomingEventCard label={label} />
            ) : (
                data?.map?.((event) => <EventCard key={event.id} {...event} isPastEvent={isPastEvent} />)
            )}
        </Stack>
    )
}

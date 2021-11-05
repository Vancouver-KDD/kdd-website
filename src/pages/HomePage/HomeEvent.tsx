import React from 'react'
import EventCard from 'components/EventCard'
import {Section} from 'components'
import {useCollection} from 'store'
import {Typography, Stack} from '@mui/material'
import moment from 'moment'
import type {EventType} from 'types'

export default function HomeEvent() {
    const {data} = useCollection({name: 'events'})
    const currentDate = moment()

    const upcomingEvents: EventType[] = []
    const pastEvents: EventType[] = []

    data?.forEach((event) => {
        if (currentDate.isSameOrBefore(event.date)) {
            upcomingEvents.push(event)
        } else {
            pastEvents.push(event)
        }
    })

    const isPastEvent = upcomingEvents.length === 0
    const latestEvent = isPastEvent ? pastEvents[0] : upcomingEvents[0]
    const labelText = isPastEvent ? 'Past Events' : 'Upcoming Events'

    return (
        <Section alignItems="center" mt={5} spacing={4}>
            <Label text={labelText} />
            <EventCard {...latestEvent} isPastEvent={isPastEvent} />
        </Section>
    )
}

function Label({text}: {text: string}) {
    return (
        <Stack alignItems="center" spacing={2}>
            <Typography variant="h4" fontWeight={700} textAlign="center">
                {text}
            </Typography>
            <Stack height={2} sx={{backgroundColor: 'primary.light'}} width={143} />
        </Stack>
    )
}

import React from 'react'
import EventCard from 'components/EventCard'
import {Space} from 'components'
import {useCollection} from 'store'
import {Typography, Stack} from '@mui/material'
import moment from 'moment'

export default function HomeEvent() {
    const {data} = useCollection({name: 'events'})
    const currentDate = moment()

    const _showEventData = data?.reduce(
        (acc, event) => {
            if (currentDate.isSameOrBefore(event.date)) {
                acc.upcoming.push(event)
                event.isPastEvent = false
            } else {
                acc.past.push(event)
                event.isPastEvent = true
            }

            return acc
        },
        {upcoming: [], past: []},
    )

    const showEvents = [_showEventData?.upcoming?.length > 0 ? _showEventData?.upcoming[0] : _showEventData?.past[0]]
    const labelText = _showEventData?.upcoming?.length > 0 ? 'Upcoming Events' : 'Past Events'

    return (
        <>
            <Space y1={50} y2={75} />
            <Stack
                pl={2}
                pr={2}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Stack
                    sx={{
                        width: 1024,
                        maxWidth: '100%',
                        textAlign: 'center',
                        '& h1': {
                            fontSize: 'clamp(36px, calc(1.85vw + 29px), 48px)',
                        },
                    }}>
                    <Label text={labelText} />
                    <Space y1={25} y2={50} />
                    {showEvents?.map?.((event) => (
                        // TODO: EventCard needs to have fontSize removed
                        <React.Fragment key={event?.id}>
                            <EventCard {...event} isPastEvent={event?.isPastEvent} />
                            <Space y1={15} y2={20} />
                        </React.Fragment>
                    ))}
                </Stack>
            </Stack>
        </>
    )
}

// TODO: Make this label component reusable
function Label({text}) {
    return (
        <Stack
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <Typography variant="h4" fontWeight={700}>
                {text}
            </Typography>
            <Space y1={10} y2={15} />
            <Stack height={2} backgroundColor="hsl(343, 91%, 56%)" width={143} />
        </Stack>
    )
}

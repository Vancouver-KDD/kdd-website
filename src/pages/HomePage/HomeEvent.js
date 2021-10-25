import React from 'react'
import EventCard from 'components/EventCard'
import {Space} from 'components'
import {useCollection} from 'store'
import {Typography, Box} from '@mui/material'

export default function HomeEvent() {
    const {data} = useCollection({name: 'events', limit: 1})

    return (
        <>
            <Space y1={50} y2={75} />
            <Box
                pl={2}
                pr={2}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Box
                    sx={{
                        width: 1024,
                        maxWidth: '100%',
                        textAlign: 'center',
                        '& h1': {
                            fontSize: 'clamp(36px, calc(1.85vw + 29px), 48px)',
                        },
                    }}>
                    <Label text={'Upcoming Events'} />
                    <Space y1={25} y2={50} />
                    {data?.map?.((event) => (
                        // TODO: EventCard needs to have fontSize removed
                        <React.Fragment key={event.id}>
                            <EventCard {...event} />
                            <Space y1={15} y2={20} />
                        </React.Fragment>
                    ))}
                </Box>
            </Box>
        </>
    )
}

// TODO: Make this label component reusable
function Label({text}) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <Typography variant="h4" fontWeight={700}>
                {text}
            </Typography>
            <Space y1={10} y2={15} />
            <Box height={2} backgroundColor="hsl(343, 91%, 56%)" width={143} />
        </Box>
    )
}

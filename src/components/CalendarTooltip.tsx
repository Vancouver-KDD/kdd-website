import React from 'react'
import {google, outlook, office365, yahoo, ics} from 'calendar-link'
import {Box} from '@mui/material'
import type {EventType} from 'types'
import type {CalendarEvent} from 'calendar-link'

export default function CalendarTooltip({title, date, durationVal, durationType, location, description}: EventType) {
    const event: CalendarEvent = {
        title,
        description,
        start: date,
        duration: [durationVal, durationType],
        location,
    }

    return (
        <Box
            sx={{
                width: 220,
                textAlign: 'center',
                fontSize: '1rem',
                '& a': {
                    '& div': {
                        padding: 1,
                        cursor: 'pointer',
                        '&:hover': {
                            backgroundColor: 'grey.200',
                        },
                    },
                },
            }}>
            <a onClick={(e) => e.stopPropagation()} href={google(event)}>
                <div>Google Calendar</div>
            </a>
            <a onClick={(e) => e.stopPropagation()} href={ics(event)}>
                <div>Apple Calendar</div>
            </a>
            <a onClick={(e) => e.stopPropagation()} href={outlook(event)}>
                <div>Outlook</div>
            </a>
            <a onClick={(e) => e.stopPropagation()} href={yahoo(event)}>
                <div>Yahoo</div>
            </a>
            <a onClick={(e) => e.stopPropagation()} href={office365(event)}>
                <div>Office 365</div>
            </a>
        </Box>
    )
}

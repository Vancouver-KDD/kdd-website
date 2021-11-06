import React from 'react'
import {google, outlook, office365, yahoo, ics} from 'calendar-link'
import {Button, Stack} from '@mui/material'
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
        <Stack width={220}>
            <Button color="inherit" onClick={(e) => e.stopPropagation()} href={google(event)} target="_blank" rel="noreferrer">
                <Stack>Google Calendar</Stack>
            </Button>
            <Button color="inherit" onClick={(e) => e.stopPropagation()} href={ics(event)} target="_blank" rel="noreferrer">
                <Stack>Apple Calendar</Stack>
            </Button>
            <Button color="inherit" onClick={(e) => e.stopPropagation()} href={outlook(event)} target="_blank" rel="noreferrer">
                <Stack>Outlook</Stack>
            </Button>
            <Button color="inherit" onClick={(e) => e.stopPropagation()} href={yahoo(event)} target="_blank" rel="noreferrer">
                <Stack>Yahoo</Stack>
            </Button>
            <Button color="inherit" onClick={(e) => e.stopPropagation()} href={office365(event)} target="_blank" rel="noreferrer">
                <Stack>Office 365</Stack>
            </Button>
        </Stack>
    )
}

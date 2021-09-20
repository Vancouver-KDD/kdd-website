import React from 'react'
import {createUseStyles} from 'react-jss'
import {google, outlook, office365, yahoo, ics} from 'calendar-link'

export default function CalendarTooltip({title, date, durationVal, durationType, location, description}) {
    const classes = useStyles()

    const event = {
        title,
        description,
        start: date,
        duration: [durationVal, durationType],
        location,
    }

    return (
        <div className={classes.tooltipContent}>
            <a href={google(event)}>
                <div>Google Calendar</div>
            </a>
            <a href={ics(event)}>
                <div>Apple Calendar</div>
            </a>
            <a href={outlook(event)}>
                <div>Outlook</div>
            </a>
            <a href={yahoo(event)}>
                <div>Yahoo</div>
            </a>
            <a href={office365(event)}>
                <div>Office 365</div>
            </a>
        </div>
    )
}

const useStyles = createUseStyles(() => ({
    tooltipContent: {
        width: 220,
        textAlign: 'center',
        fontSize: '1.6rem',
        '& a': {
            color: 'inherit',
            textDecoration: 'inherit',
            '& div': {
                padding: 8,
                cursor: 'pointer',
                '&:hover': {
                    backgroundColor: '#eee',
                },
            },
        },
    },
}))

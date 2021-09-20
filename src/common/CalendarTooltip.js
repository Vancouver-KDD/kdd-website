import React from 'react'
import {createUseStyles} from 'react-jss'

export default function CalendarTooltip() {
    const classes = useStyles()

    return (
        <div className={classes.tooltipContent}>
            <div>Google Calendar</div>
            <div>Apple Calendar</div>
            <div>Outlook</div>
        </div>
    )
}

const useStyles = createUseStyles(() => ({
    tooltipContent: {
        width: 220,
        textAlign: 'center',
        fontSize: '1.6rem',
        '& div': {
            padding: 8,
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: '#eee',
            },
        },
    },
}))

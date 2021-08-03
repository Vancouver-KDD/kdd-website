import React from 'react'
import {createUseStyles} from 'react-jss'

function CalendarTooltip() {
    const classes = useStyles()

    return (
        <div className={classes.tooltip}>
            <div className={classes.tooltipContent}>
                <div>Google Calendar</div>
                <div>Apple Calendar</div>
                <div>Outlook</div>
            </div>
        </div>
    )
}

const useStyles = createUseStyles(() => ({
    tooltip: {
        position: 'absolute',
        bottom: '130px',
        left: '125px',
    },
    tooltipContent: {
        width: '220px',
        height: '120px',
        backgroundColor: '#ffffff',
        textAlign: 'center',
        borderRadius: '8px',
        boxShadow: '1px 1px 1px #BDBDBD',
        '& div': {
            height: '40px',
            width: '100%',
            fontSize: '2rem',
            textAlign: 'center',
            paddingTop: '5px',
            '&:hover': {
                backgroundColor: '#BDBDBD',
                borderRadius: '8px',
            },
        },
        '&::after': {
            content: ' ',
            position: 'absolute',
            top: '100%',
            left: '50%',
            marginLeft: '-10px',
            borderWidth: '10px',
            borderStyle: 'solid',
            borderColor: 'black transparent transparent transparent',
        },
    },
}))

export default CalendarTooltip

import React from 'react'
import {createUseStyles} from 'react-jss'
import btnCalendar from '../assets/images/btn-calendar.svg'

function CalendarButton(props) {
    const classes = useStyles({...props})

    return <input className={classes.btnEventCalendar} type="button" />
}

const useStyles = createUseStyles(() => ({
    btnEventCalendar: {
        background: `url(${btnCalendar}) no-repeat`,
        backgroundPosition: 'center',
        border: 'none',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        backgroundColor: '#5D5FEF',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#5DC1EF',
        },
    },
}))

export default CalendarButton

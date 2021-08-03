import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import {createUseStyles, useTheme} from 'react-jss'
import btnCalendarImg from '../assets/images/btn-calendar.svg'

function CalendarButton({onClick, disabled}) {
    const theme = useTheme()
    const classes = useStyles({theme})

    const handlClick = () => {
        onClick?.()
    }

    return (
        <button
            className={classnames(classes.btnEventCalendar, disabled && classes.disabled)}
            type="button"
            onClick={handlClick}
            disabled={disabled}>{}</button>
    )
}

CalendarButton.propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
}

const useStyles = createUseStyles((theme) => ({
    btnEventCalendar: {
        background: `url(${btnCalendarImg}) no-repeat`,
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
    disabled: {
        backgroundColor: theme.colorPrimaryDisabled,
    },
}))

export default CalendarButton

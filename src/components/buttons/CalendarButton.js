import React, {useState} from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import {createUseStyles} from 'react-jss'
import btnCalendarImg from 'assets/images/btn-calendar.svg'
import Popover from '@mui/material/Popover'
import CalendarTooltip from 'components/CalendarTooltip'

function CalendarButton({id, title, date, durationVal, durationType, location, description, disabled}) {
    const classes = useStyles({})
    const [calendarAnchor, setCalendarAnchor] = useState(null)
    const handleClick = (event) => {
        event.preventDefault()
        setCalendarAnchor(event.currentTarget)
    }
    const handleClose = (event) => {
        event.preventDefault()
        setCalendarAnchor(null)
    }
    const open = Boolean(calendarAnchor)
    const eventId = open ? id : undefined

    return (
        <>
            <Popover
                id={eventId}
                open={open}
                anchorEl={calendarAnchor}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}>
                <CalendarTooltip
                    title={title}
                    date={date}
                    durationVal={durationVal}
                    durationType={durationType}
                    location={location}
                    description={description}
                />
            </Popover>
            <button
                className={classnames(classes.btnEventCalendar, disabled && classes.disabled)}
                type="button"
                onClick={handleClick}
                disabled={disabled}
            />
        </>
    )
}

CalendarButton.propTypes = {
    id: PropTypes.number,
    disabled: PropTypes.bool,
}

const useStyles = createUseStyles(() => ({
    btnEventCalendar: {
        background: `url(${btnCalendarImg}) no-repeat`,
        backgroundPosition: 'center',
        border: 'none',
        width: 48,
        height: 48,
        borderRadius: '50%',
        backgroundColor: 'hsl(239, 82%, 65%)',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'hsl(240, 81%, 71%)',
        },
    },
    disabled: {
        backgroundColor: 'hsl(239, 82%, 81%)',
    },
}))

export default CalendarButton

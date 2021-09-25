import React, {useState} from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import {createUseStyles, useTheme} from 'react-jss'
import btnCalendarImg from 'assets/images/btn-calendar.svg'
import Popover from '@mui/material/Popover'
import CalendarTooltip from 'components/CalendarTooltip'

function CalendarButton({id, title, date, durationVal, durationType, location, description, disabled}) {
    const theme = useTheme()
    const classes = useStyles({theme})
    const [calendarAnchor, setCalendarAnchor] = useState(null)
    const handleClick = (event) => {
        setCalendarAnchor(event.currentTarget)
    }
    const handleClose = () => {
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

const useStyles = createUseStyles((theme) => ({
    btnEventCalendar: {
        background: `url(${btnCalendarImg}) no-repeat`,
        backgroundPosition: 'center',
        border: 'none',
        width: 48,
        height: 48,
        borderRadius: '50%',
        backgroundColor: theme.colorSecondary,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.colorSecondaryHover,
        },
    },
    disabled: {
        backgroundColor: theme.colorSecondaryDisabled,
    },
}))

export default CalendarButton

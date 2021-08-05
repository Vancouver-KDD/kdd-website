import React, {useState} from 'react'
import {createUseStyles} from 'react-jss'
import PropTypes from 'prop-types'
import SignupButton from 'common/SignupButton'
import CalendarButton from 'common/CalendarButton'
import CalendarTooltip from 'common/CalendarTooltip'
import tempEventImg from '../assets/images/temp-event.png'

function EventCard({title, date, location}) {
    const classes = useStyles()
    const [isCalTooltipDisplay, setIsCalTooltipDisplay] = useState(false)

    const handleClick = () => {
        setIsCalTooltipDisplay((_isCalTooltipDisplay) => !_isCalTooltipDisplay)
    }

    return (
        <div className={classes.eventCard}>
            <img src={`${tempEventImg}`} alt="Temp Event Card" />
            <div className={classes.eventInfo}>
                <p className={classes.eventDate}>{date}</p>
                <h2>{title}</h2>
                <p className={classes.eventLocation}>{location}</p>
            </div>
            <div className={classes.eventBtnGroup}>
                <SignupButton />
                {isCalTooltipDisplay && <CalendarTooltip />}
                <CalendarButton onClick={handleClick} />
            </div>
        </div>
    )
}

EventCard.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string,
}

const useStyles = createUseStyles(() => ({
    eventCard: {
        width: '375px',
        height: '390px',
        margin: '2px 0px',
        border: '1px solid #7b7b7b',
        borderRadius: '16px',
        '& img': {
            width: '373px',
            objectFit: 'cover',
            borderStartStartRadius: '16px',
            borderStartEndRadius: '16px',
        },
        '& h2': {
            fontSize: '2.2rem',
        },
    },
    eventInfo: {
        display: 'flex',
        height: '12rem',
        padding: '10px 20px',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    eventDate: {
        fontSize: '1.5rem',
        lineHeight: '19px',
    },
    eventLocation: {
        fontSize: '1.5rem',
        lineHeight: '19px',
    },
    eventBtnGroup: {
        display: 'flex',
        justifyContent: 'space-evenly',
        height: '12rem',
        padding: '10px 20px',
        position: 'relative',
    },
}))

export default EventCard

import React, {useState} from 'react'
import {createUseStyles} from 'react-jss'
import PropTypes from 'prop-types'
import SignupButton from 'common/SignupButton'
import CalendarButton from 'common/CalendarButton'
import CalendarTooltip from 'common/CalendarTooltip'
import tempEventImg from 'assets/images/temp-event.png'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function EventCard({title, date, description, location}) {
    const classes = useStyles()
    const dateStr = moment(date).format('LL LT')
    const [isCalTooltipDisplay, setIsCalTooltipDisplay] = useState(false)

    const handleClick = () => {
        setIsCalTooltipDisplay((_isCalTooltipDisplay) => !_isCalTooltipDisplay)
    }

    return (
        <div className={classes.eventCard}>
            <img className={classes.eventImage} src={`${tempEventImg}`} alt="Temp Event Card" />
            <div className={classes.eventInfoContainer}>
                <div className={classes.eventInfo}>
                    <p className={classes.eventDate}>{dateStr}</p>
                    <h2>{title}</h2>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown>
                    <p className={classes.eventLocation}>{location}</p>
                </div>
                <div className={classes.eventBtnGroup}>
                    <SignupButton />
                    {isCalTooltipDisplay && <CalendarTooltip />}
                    <CalendarButton onClick={handleClick} />
                </div>
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
        borderRadius: 16,
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        // '& img': {
        // width: '373px',
        // objectFit: 'cover',
        // borderStartStartRadius: '16px',
        // borderStartEndRadius: '16px',
        // },
        // '& h2': {
        //     fontSize: '2.2rem',
        // },
        // '@media (min-width: 1024px)': {
        // width: '502px',
        // height: '442px',
        // margin: '2px 5px',
        // '& img': {
        //     width: '502px',
        // },
        // },
    },
    eventImage: {
        width: '50%',
        objectFit: 'cover',
        aspectRatio: '16 / 10',
    },
    eventInfoContainer: {
        backgroundColor: '#eee',
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
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

import React, {useState} from 'react'
import {createUseStyles} from 'react-jss'
import PropTypes from 'prop-types'
import SignupButton from 'common/SignupButton'
import CalendarButton from 'common/CalendarButton'
import CalendarTooltip from 'common/CalendarTooltip'
import {Space} from 'components'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function EventCard({title, poster, date, joinLink, description, location}) {
    const classes = useStyles()
    const posterImageUrl = poster?.[0]?.formats?.medium?.url || poster?.[0]?.url

    const dateStr = moment(date).format('MMM DD, LT')
    const dateLocation = `${dateStr} | ${location}`
    const [isCalTooltipDisplay, setIsCalTooltipDisplay] = useState(false)

    const handleClick = () => {
        setIsCalTooltipDisplay((_isCalTooltipDisplay) => !_isCalTooltipDisplay)
    }

    return (
        <div className={classes.eventCard}>
            <img className={classes.eventImage} src={posterImageUrl} alt={title} />
            <div className={classes.eventInfoContainer}>
                <div className={classes.eventInfo}>
                    <p className={classes.eventDate}>{dateLocation}</p>
                    <h2>{title}</h2>
                    {/* <ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown> */}
                    <p className={classes.eventDescription}>{description}</p>
                </div>
                <div className={classes.eventBtnGroup}>
                    <div style={{flex: 1}}>
                        <SignupButton href={joinLink} />
                    </div>
                    <Space y1={10} />
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
    },
    eventImage: {
        width: '50%',
        objectFit: 'cover',
        aspectRatio: '16 / 10',
    },
    eventInfoContainer: {
        backgroundColor: '#F5F5F5',
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        padding: 25,
        flex: 1,
    },
    eventInfo: {
        display: 'flex',
        height: '12rem',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    eventDate: {
        fontSize: '1.8rem',
    },
    eventTitle: {
        fontSize: '2.4rem',
    },
    eventDescription: {
        fontSize: '1.8rem',
        flex: 1,
        display: 'flex',
    },
    eventBtnGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
}))

export default EventCard

import React from 'react'
import {createUseStyles} from 'react-jss'
import PropTypes from 'prop-types'
import SignupButton from 'common/SignupButton'
import CalendarButton from 'common/CalendarButton'
import {Space} from 'components'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function EventCard({id, title, poster, date, joinLink, description, location}) {
    const classes = useStyles()
    const posterImageUrl = poster?.[0]?.formats?.medium?.url || poster?.[0]?.url

    const dateStr = moment(date).format('MMM DD, LT')
    const dateLocation = `${dateStr} | ${location}`

    return (
        <div className={classes.eventCard}>
            <img className={classes.eventImage} src={posterImageUrl} alt={title} />
            <div className={classes.eventInfoContainer}>
                <div className={classes.eventInfo}>
                    <p className={classes.eventDate}>{dateLocation}</p>
                    <Space y1={15} />
                    <h2>{title}</h2>
                    <Space y1={15} />
                    <p className={classes.eventDescription}>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown>
                    </p>
                </div>
                <Space y1={15} />
                <div className={classes.eventBtnGroup}>
                    <div className={classes.signUpButtonContainer}>
                        <SignupButton href={joinLink} />
                    </div>
                    <Space y1={10} />

                    <CalendarButton id={id} title={title} />
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
        flexDirection: 'column',
        overflow: 'hidden',
        '@media (min-width: 600px)': {
            flexDirection: 'row',
        },
    },
    eventImage: {
        width: '100%',
        objectFit: 'cover',
        aspectRatio: '4 / 3',
        '@media (min-width: 600px)': {
            aspectRatio: '16 / 10',
            width: '50%',
        },
    },
    eventInfoContainer: {
        display: 'flex',
        backgroundColor: '#F5F5F5',
        flexDirection: 'column',
        padding: 'clamp(15px, calc(0.95vw + 15px), 25px)', // TODO: Fix to 15px-25px
        width: '100%',
        '@media (min-width: 600px)': {
            width: '50%',
        },
    },
    eventInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // TODO: Fix to ensure picture ratio only changes from 16/10 to 4/3
        flex: 1,
        '& h2': {
            fontSize: '2.4rem',
        },
    },
    eventDate: {
        fontSize: '1.6rem',
    },
    eventDescription: {
        fontSize: '160%',
        display: 'flex',
        // TODO: Fix to ensure picture ratio only changes from 16/10 to 4/3
        flex: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    signUpButtonContainer: {
        flex: 1,
    },
    eventBtnGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
}))

export default EventCard

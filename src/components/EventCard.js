import React from 'react'
import {createUseStyles} from 'react-jss'
import PropTypes from 'prop-types'
import SignupButton from 'components/buttons/SignupButton'
import CalendarButton from 'components/buttons/CalendarButton'
import {Space} from 'components'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {Link} from 'react-router-dom'

function EventCard({id, title, poster, date, durationVal, durationType, joinLink, description, location}) {
    const classes = useStyles()
    const posterImageUrl = poster?.[0]?.formats?.medium?.url || poster?.[0]?.url

    const dateStr = moment(date).format('MMM DD, LT')
    const dateLocation = `${dateStr} | ${location}`

    return (
        <Link to={`events/${id}`} className={classes.link}>
            <div className={classes.eventCard}>
                <img className={classes.eventImage} src={posterImageUrl} alt={title} />
                <div className={classes.eventInfoContainer}>
                    <div className={classes.eventInfo}>
                        <p className={classes.eventDate}>{dateLocation}</p>
                        <Space y1={15} />
                        <h2>{title}</h2>
                        <Space y1={15} />
                        <div className={classes.eventDescription}>
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown>
                        </div>
                    </div>
                    <Space y1={15} />
                    <div className={classes.eventBtnGroup}>
                        <div className={classes.signUpButtonContainer}>
                            <SignupButton href={joinLink} />
                        </div>
                        <Space y1={10} />

                        <CalendarButton
                            id={id}
                            title={title}
                            date={date}
                            durationVal={durationVal}
                            durationType={durationType}
                            location={location}
                            description={description}
                        />
                    </div>
                </div>
            </div>
        </Link>
    )
}

EventCard.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string,
}

const useStyles = createUseStyles({
    link: {
        textDecoration: 'inherit',
    },
    eventCard: {
        cursor: 'pointer',
        borderRadius: 16,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        '@media (min-width: 600px)': {
            flexDirection: 'row',
        },
        '&:hover > img': {
            transform: 'scale(1.1)',
        },
    },
    eventImage: {
        transitionDuration: '0.5s',
        width: '100%',
        objectFit: 'cover',
        aspectRatio: '4 / 3',
        '@media (min-width: 600px)': {
            aspectRatio: '16 / 10',
            width: '50%',
        },
    },
    eventInfoContainer: {
        zIndex: 1,
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
        display: '-webkit-box',
        WebkitLineClamp: 10,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        '@media (min-width: 600px)': {
            WebkitLineClamp: 5,
        },
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
})

export default EventCard

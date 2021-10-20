import React from 'react'
import {createUseStyles} from 'react-jss'
import PropTypes from 'prop-types'
import {Space} from 'components'
import ReactMarkdown from 'react-markdown'
import calender from 'assets/images/no-event.png'

function NoUpcomingEventCard({label}) {
    const classes = useStyles()

    return (
        <div className={classes.eventCard}>
            <img className={classes.eventImage} src={calender} alt={''} />
            <div className={classes.eventInfoContainer}>
                <div className={classes.eventInfo}>
                    <Space y1={15} />
                    <h2>No {label}</h2>
                    <Space y1={15} />
                    <div className={classes.eventDescription}>
                        <ReactMarkdown>Check Back Soon!</ReactMarkdown>
                    </div>
                </div>
                <Space y1={15} />
            </div>
        </div>
    )
}

NoUpcomingEventCard.propTypes = {
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
        objectFit: 'contain',
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
})

export default NoUpcomingEventCard

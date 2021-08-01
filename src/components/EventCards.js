import React from 'react'
import {createUseStyles} from 'react-jss'
import {ArrorButton} from 'common/ArrorButton'
import EventCard from './EventCard'

function EventCards(props) {
    // const theme = useTheme()
    // const style = useStyles({...props, theme})
    const classes = useStyles({...props})

    return (
        <div className={classes.events}>
            <div className={classes.groupEvents}>
                <h1>Upcomming Events</h1>
                <div className={classes.groupArrowButton}>
                    <ArrorButton direction="left" />
                    <ArrorButton direction="right" />
                </div>
                <EventCard />
                <EventCard />
            </div>
        </div>
    )
}

const useStyles = createUseStyles(() => ({
    events: {
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        '& h1': {
            marginTop: '4rem',
            fontSize: '3.5rem',
        },
    },
    groupEvents: {
        top: '0',
        width: '100%',
        flexDirection: 'column',
    },
    groupArrowButton: {
        position: 'relative',
        display: 'inline-block',
        top: '0',
        left: '38%',
    },
}))

export default EventCards

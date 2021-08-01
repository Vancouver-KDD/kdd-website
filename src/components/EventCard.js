import React from 'react'
import {createUseStyles} from 'react-jss'
import SignupButton from 'common/SignupButton'
import CalendarButton from 'common/CalendarButton'
import CalendarSelection from 'common/CalendarSelection'
import tempEventImg from '../assets/images/temp-event.png'

function EventCard(props) {
    const classes = useStyles({...props})

    return (
        <div className={classes.eventCard}>
            <img src={`${tempEventImg}`} alt="Temp Event Card" />
            <div className={classes.eventInfo}>
                <p className={classes.eventDate}>MON, JUL 27, 2021 AT 7 PM PDT</p>
                <h2>VANCOVER KDD JULY 2021 MEETUP</h2>
                <p className={classes.eventLocation}>Vancouver Public Library</p>
            </div>
            <div className={classes.eventBtnGroup}>
                <SignupButton />
                <CalendarSelection />
                <CalendarButton />
            </div>
        </div>
    )
}

const useStyles = createUseStyles(() => ({
    eventCard: {
        width: '375px',
        height: '390px',
        margin: '2px auto',
        border: '1px solid black',
        borderRadius: '16px',
        '& img': {
            width: '100%',
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
    },
}))

export default EventCard

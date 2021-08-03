import React, {useState} from 'react'
import {createUseStyles} from 'react-jss'
import {ArrowButton} from 'common/ArrowButton'
import EventCard from './EventCard'

function EventCards() {
    const [currentCardNo, setCurrentCardNo] = useState(0)
    const [cardListSize] = useState(4)
    const classes = useStyles(currentCardNo, cardListSize)

    /* eslint-disable no-param-reassign */
    const leftOnClick = (index) => {
        if (cardListSize <= index) index = 0
        if (index < 0) index = cardListSize - 1
        setCurrentCardNo(index)
        console.log(currentCardNo)
    }

    return (
        <div className={classes.events}>
            <div>
                <h1>Upcomming Events</h1>
                <div className={classes.groupArrowButton}>
                    <ArrowButton direction="left" onClick={() => leftOnClick(currentCardNo - 1)} />
                    <ArrowButton direction="right" onClick={() => leftOnClick(currentCardNo + 1)} />
                </div>
            </div>
            <div className={classes.eventsBox}>
                <div className={classes.eventCardList}>
                    <EventCard
                        key={0}
                        title="VANCOVER KDD JULY 2021 MEETUP1"
                        date="MON, JUL 27, 2021 AT 7 PM PDT"
                        location="Vancouver Public Library"
                    />
                    <EventCard
                        key={1}
                        title="VANCOVER KDD JULY 2021 MEETUP2"
                        date="MON, JUL 27, 2021 AT 7 PM PDT"
                        location="Vancouver Public Library"
                    />
                    <EventCard
                        key={2}
                        title="VANCOVER KDD JULY 2021 MEETUP3"
                        date="MON, JUL 27, 2021 AT 7 PM PDT"
                        location="Vancouver Public Library"
                    />
                    <EventCard
                        key={3}
                        title="VANCOVER KDD JULY 2021 MEETUP4"
                        date="MON, JUL 27, 2021 AT 7 PM PDT"
                        location="Vancouver Public Library"
                    />
                </div>
            </div>
        </div>
    )
}

const useStyles = createUseStyles({
    events: {
        position: 'relative',
        width: '375px',
        height: '480px',
        textAlign: 'center',
        margin: 'auto',
        '& h1': {
            marginTop: '4rem',
            fontSize: '3.5rem',
        },
    },
    eventsBox: {
        position: 'relative',
        margin: 'auto',
        overflowX: 'hidden',
    },
    eventCardList: {
        width: '1500px',
        overflow: 'hidden',
        transition: 'all 300ms ease 0s',
        transform: (currentCardNo) => `translate3d(${currentCardNo * -375}px, 0px, 0px)`,
        display: 'flex',
    },
    groupArrowButton: {
        position: 'relative',
        display: 'inline-block',
        top: '0',
        left: '38%',
    },
})

export default EventCards

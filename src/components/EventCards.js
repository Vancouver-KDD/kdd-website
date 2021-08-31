import React, {useState} from 'react'
import {createUseStyles} from 'react-jss'
import {ArrowButton} from 'common/ArrowButton'
import {useCollection} from 'store'
import EventCard from './EventCard'

const TEMP_LIST_SIZE = 4

export default function EventCards() {
    const [currentCardNo, setCurrentCardNo] = useState(0)
    const [cardListSize] = useState(TEMP_LIST_SIZE)
    const classes = useStyles(currentCardNo)
    const {data} = useCollection({name: 'events'})
    const handleClick = (index) => {
        if (cardListSize <= index) index = 0
        if (index < 0) index = cardListSize - 1
        setCurrentCardNo(index)
    }

    return (
        <div className={classes.events}>
            <div>
                <h1>Upcoming Events</h1>
                <div className={classes.groupArrowButton}>
                    <ArrowButton direction="left" onClick={() => handleClick(currentCardNo - 1)} />
                    <ArrowButton direction="right" onClick={() => handleClick(currentCardNo + 1)} />
                </div>
            </div>
            <div className={classes.eventsBox}>
                <div className={classes.eventCardList}>
                    {data?.map((event) => (
                        <EventCard {...event} key={event.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

const useStyles = createUseStyles({
    events: {
        position: 'relative',
        width: '377px',
        height: '480px',
        textAlign: 'center',
        margin: 'auto',
        '& h1': {
            marginTop: '4rem',
            fontSize: '3.5rem',
        },
        '@media (min-width: 800px)': {
            width: '756px',
        },
        '@media (min-width: 1024px)': {
            width: '1024px',
            height: '558px',
        },
    },
    eventsBox: {
        position: 'relative',
        margin: 'auto',
        overflowX: 'hidden',
    },
    eventCardList: {
        width: '3500px',
        overflow: 'hidden',
        transition: 'all 300ms ease 0s',
        display: 'flex',
        transform: (currentCardNo) => `translate3d(${currentCardNo * -379}px, 0px, 0px)`,
        '@media (min-width: 1024px)': {
            transform: (currentCardNo) => `translate3d(${currentCardNo * -512}px, 0px, 0px)`,
        },
    },
    groupArrowButton: {
        position: 'relative',
        display: 'inline-block',
        top: '0',
        left: '36%',
        '& button': {
            marginLeft: '8px',
        },
        '@media (min-width: 800px)': {
            left: '43.5%',
        },
        '@media (min-width: 1024px)': {
            left: '45%',
            '& button': {
                marginLeft: '12px',
            },
        },
    },
})

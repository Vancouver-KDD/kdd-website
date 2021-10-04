import React from 'react'
import {createUseStyles} from 'react-jss'
import EventCard from 'components/EventCard'
import {Space} from 'components'
import {useCollection} from 'store'

export default function HomeEvent() {
    const classes = useStyles()
    const {data} = useCollection({name: 'events', limit: 1})

    return (
        <>
            <Space y1={50} y2={75} />
            <div className={classes.container}>
                <div className={classes.events}>
                    <Label text={'Upcoming Events'} />
                    <Space y1={25} y2={50} />
                    {data?.map?.((event) => (
                        <React.Fragment key={event.id}>
                            <EventCard {...event} />
                            <Space y1={15} y2={20} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    )
}

// TODO: Make this label component reusable
function Label({text}) {
    const classes = useStyles()
    return (
        <div className={classes.labelContainer}>
            <h4>{text}</h4>
            <Space y1={10} y2={15} />
            <div className={classes.labelLine} />
        </div>
    )
}

const useStyles = createUseStyles((theme) => ({
    labelContainer: {display: 'flex', flexDirection: 'column', alignItems: 'center'},
    labelLine: {height: 2, backgroundColor: theme.colorPrimary, width: 143},
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    events: {
        width: 1024,
        maxWidth: '100%',
        textAlign: 'center',
        '& h1': {
            fontSize: 'clamp(36px, calc(1.85vw + 29px), 48px)',
        },
    },
}))

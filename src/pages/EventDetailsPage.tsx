import React from 'react'
import {useRouteMatch} from 'react-router-dom'
import {createUseStyles} from 'react-jss'
import NavigationBar from 'components/NavigationBar'
import Footer from 'components/Footer'
import {Space} from 'components'
import {useCollection} from 'store'
import type {themeType} from 'App'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import moment from 'moment'
import SignupButton from 'components/buttons/SignupButton'
import CalendarButton from 'components/buttons/CalendarButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export default function EventDetailsPage() {
    const classes = useStyles()
    const match = useRouteMatch<{id: string}>('/events/:id')
    const {data} = useCollection({name: 'events', id: match?.params.id})
    const {id, title, date, poster, durationVal, durationType, joinLink, description, location} = data?.[0] ?? {}
    const dateStr = moment(date).format('MMM DD YYYY, LT')
    const dateEndStr = moment(date).add(durationVal, durationType).format('LT')
    const dateLocation = `${dateStr} - ${dateEndStr} | ${location}`

    return (
        <>
            <NavigationBar />
            <div className={classes.container}>
                <div className={classes.contentContainer}>
                    <button className={classes.backButton} onClick={() => window.history.back()}>
                        <span className={classes.backButtonIcon}>
                            <ArrowBackIcon fontSize="inherit" />
                        </span>
                        Back
                    </button>
                    <div className={classes.content}>
                        <Space direction="vertical" y1={10} y2={30} />
                        <img
                            src={poster?.[0]?.formats.large.url ?? poster?.[0]?.url}
                            alt={poster?.[0]?.name}
                            className={classes.infoImage}
                        />
                        <Space y1={10} y2={25} />
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
                        <Space y1={10} y2={30} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

const useStyles = createUseStyles((theme: themeType) => ({
    labelContainer: {display: 'flex', flexDirection: 'column', alignItems: 'center'},
    labelLine: {height: 2, backgroundColor: theme.colorPrimary, width: 143},
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
    },
    backButton: {display: 'flex', alignItems: 'center', padding: 10, alignSelf: 'flex-start', fontSize: '2.5rem'},
    backButtonIcon: {fontSize: '3rem', lineHeight: 0},
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: 1024,
        maxWidth: '100%',
    },
    content: {
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    infoImage: {
        height: 300,
        objectFit: 'cover',
        aspectRatio: String(16 / 10),
        alignSelf: 'center',
        borderRadius: 4,
    },
    eventInfoContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: 900,
        maxWidth: '100%',
        alignSelf: 'center',
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
    },
    signUpButtonContainer: {
        flex: 1,
    },
    eventBtnGroup: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        width: 600,
        maxWidth: '100%',
    },
}))

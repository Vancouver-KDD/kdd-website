import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import {Box, Link, Typography} from '@mui/material'
import {CalendarButton, ClosedButton, SignupButton} from 'components/buttons'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type {EventType} from 'types'

type PropTypes = EventType & {isPastEvent: boolean}

function EventCard({id, title, poster, date, durationVal, durationType, joinLink, description, location, isPastEvent}: PropTypes) {
    const posterImageUrl = poster?.[0]?.formats?.medium?.url || poster?.[0]?.url
    const dateStr = moment(date).format('MMM DD, LT')
    const dateLocation = `${dateStr} | ${location}`

    return (
        <Link component={RouterLink} to={`events/${id}`} sx={{color: 'inherit', textDecoration: 'inherit'}}>
            <Box
                sx={{
                    borderRadius: 2,
                    overflow: 'hidden',
                    alignItems: {sm: 'center', md: 'stretch'},
                    flexDirection: {sm: 'column', md: 'row'},
                    '&:hover > img': {transform: 'scale(1.1)'},
                }}>
                <Box
                    component="img"
                    sx={{
                        transitionDuration: '0.5s',
                        width: {sm: '100%', md: '50%'},
                        objectFit: 'cover',
                        aspectRatio: {sm: '4 / 3', md: '16 / 10'},
                    }}
                    src={posterImageUrl}
                    alt={title}
                />
                <Box sx={{zIndex: 1, backgroundColor: '#F5F5F5', p: 3, width: {sm: '100%', md: '50%'}}} gap={2}>
                    <Box sx={{justifyContent: 'center', flex: 1}} gap={2}>
                        <Typography variant="subtitle1" textAlign="center">
                            {dateLocation}
                        </Typography>
                        <Typography variant="h5" fontWeight="700" textAlign="center">
                            {title}
                        </Typography>
                        <Typography
                            sx={{
                                display: '-webkit-box',
                                WebkitLineClamp: {sm: 10, md: 5},
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}>
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown>
                        </Typography>
                    </Box>
                    <Box flexDirection="row" alignItems="center" justifyContent="center" gap={2}>
                        <Box flex={1}>{!isPastEvent ? <SignupButton href={joinLink} /> : <ClosedButton />}</Box>
                        {!isPastEvent && (
                            <CalendarButton
                                id={id}
                                title={title}
                                date={date}
                                durationVal={durationVal}
                                durationType={durationType}
                                location={location}
                                description={description}
                            />
                        )}
                    </Box>
                </Box>
            </Box>
        </Link>
    )
}

export default EventCard

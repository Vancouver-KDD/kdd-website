import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import {Stack, Link, Typography} from '@mui/material'
import {CalendarButton, SignupButton} from 'components/buttons'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type {EventType} from 'types'

type PropTypes = EventType & {isPastEvent: boolean}

function EventCard(props: PropTypes) {
    const {id, title, poster, date, joinLink, description, location, isPastEvent} = props
    const posterImageUrl = poster?.[0]?.formats?.medium?.url || poster?.[0]?.url
    const dateStr = moment(date).format('MMM DD, LT')
    const dateLocation = `${dateStr} | ${location}`

    return (
        <Link component={RouterLink} to={`events/${id}`} sx={{color: 'inherit', textDecoration: 'inherit'}}>
            <Stack
                sx={{
                    borderRadius: 2,
                    overflow: 'hidden',
                    alignItems: {sm: 'center', md: 'stretch'},
                    flexDirection: {sm: 'column', md: 'row'},
                    '&:hover > img': {transform: 'scale(1.1)'},
                }}>
                <Stack
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
                <Stack sx={{zIndex: 1, backgroundColor: '#F5F5F5', p: 3, width: {sm: '100%', md: '50%'}}} gap={2}>
                    <Stack sx={{justifyContent: 'center', flex: 1}} gap={2}>
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
                    </Stack>
                    <Stack flexDirection="row" alignItems="center" justifyContent="center" gap={2}>
                        <Stack flex={1}>
                            <SignupButton closed={isPastEvent} href={joinLink} />
                        </Stack>
                        {!isPastEvent && <CalendarButton {...props} />}
                    </Stack>
                </Stack>
            </Stack>
        </Link>
    )
}

export default EventCard

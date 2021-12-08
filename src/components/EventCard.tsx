import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import {Box, Stack, Link, Typography} from '@mui/material'
import {CalendarButton, SignupButton} from 'components/buttons'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type {EventType} from 'types'

type PropTypes = EventType & {isPastEvent: boolean}

function EventCard(props: PropTypes) {
    const {id, title, poster, date, joinLink, description, location, isPastEvent} = props
    const posterImageUrl = poster?.formats?.medium?.url || poster?.url
    const dateStr = moment(date).format('MMM DD, LT')
    const dateLocation = `${dateStr} | ${location}`

    return (
        <Link component={RouterLink} to={`events/${id}`} sx={{color: 'inherit', textDecoration: 'inherit'}}>
            <Stack
                direction={{xs: 'column', md: 'row'}}
                sx={{
                    borderRadius: 2,
                    overflow: 'hidden',
                    alignItems: {xs: 'center', md: 'stretch'},
                    '&:hover > img': {transform: 'scale(1.1)'},
                }}>
                <Box
                    component="img"
                    sx={{
                        transitionDuration: '0.5s',
                        width: {xs: '100%', md: '50%'},
                        objectFit: 'cover',
                        aspectRatio: {xs: '4 / 3', md: '16 / 10'},
                    }}
                    src={posterImageUrl}
                    alt={title}
                />
                <Stack sx={{zIndex: 1, backgroundColor: 'grey.100', p: 3, width: {xs: '100%', md: '50%'}}} spacing={2}>
                    <Stack sx={{justifyContent: 'center', flex: 1}} spacing={2}>
                        <Typography variant="subtitle1" textAlign="center">
                            {dateLocation}
                        </Typography>
                        <Typography variant="h5" fontWeight="700" textAlign="center">
                            {title}
                        </Typography>
                        <Typography
                            sx={{
                                display: '-webkit-box',
                                WebkitLineClamp: {xs: 10, md: 5},
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}>
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown>
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
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

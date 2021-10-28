import React from 'react'
import {useRouteMatch} from 'react-router-dom'
import {Section, Footer, NavigationBar} from 'components'
import {SignupButton, CalendarButton} from 'components/buttons'
import {useDocument} from 'store'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import moment from 'moment'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import {Box, ButtonBase, Typography} from '@mui/material'

export default function EventDetailsPage() {
    const match = useRouteMatch<{id?: string}>('/events/:id')
    const {data} = useDocument({name: 'event', id: match?.params.id ?? 'Missing ID'})
    const {title, date, poster, durationVal, durationType, joinLink, description, location} = data ?? {}
    const dateStr = moment(date).format('MMM DD YYYY, LT')
    const dateEndStr = moment(date).add(durationVal, durationType).format('LT')
    const dateLocation = `${dateStr} - ${dateEndStr} | ${location}`
    const isEnabledSignUp = moment().isSameOrBefore(date)

    return (
        <>
            <NavigationBar />
            <Section>
                <ButtonBase
                    sx={{p: 1, alignSelf: 'flex-start', flexDirection: 'row', alignItems: 'center'}}
                    onClick={() => window.history.back()}>
                    <Typography fontSize={'1.8rem'} lineHeight={0} mr={1}>
                        <ArrowBackIcon fontSize="inherit" />
                    </Typography>
                    <Typography variant="h5" lineHeight={'normal'} mt={0.15}>
                        BACK
                    </Typography>
                </ButtonBase>
                <Box sx={{backgroundColor: 'grey.A100', borderRadius: 1, alignItems: 'center', p: 2, gap: 2}}>
                    <Box
                        component="img"
                        sx={{
                            maxHeight: 300,
                            maxWidth: '100%',
                            objectFit: 'cover',
                            aspectRatio: String(16 / 10),
                            borderRadius: 1,
                        }}
                        src={poster?.[0]?.formats.large.url ?? poster?.[0]?.url}
                        alt={poster?.[0]?.name}
                    />
                    <Box maxWidth={'md'} gap={2}>
                        <Typography variant="subtitle1" textAlign="center">
                            {dateLocation}
                        </Typography>
                        <Typography variant="h5" fontWeight="700" textAlign="center">
                            {title}
                        </Typography>
                        <Typography>
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown>
                        </Typography>
                        <Box flexDirection="row" alignSelf="center" width={'100%'} maxWidth="sm" gap={2}>
                            <Box flex={1}>
                                <SignupButton closed={!isEnabledSignUp} href={joinLink} />
                            </Box>

                            {isEnabledSignUp && <CalendarButton {...(data ?? {})} />}
                        </Box>
                    </Box>
                </Box>
            </Section>
            <Footer />
        </>
    )
}

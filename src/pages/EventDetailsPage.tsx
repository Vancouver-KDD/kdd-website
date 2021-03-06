import React from 'react'
import {useRouteMatch} from 'react-router-dom'
import {Section, Footer, NavigationBar, PhotoCard} from 'components'
import {SignupButton, CalendarButton} from 'components/buttons'
import {useDocument} from 'store'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import moment from 'moment'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import {Stack, ButtonBase, Typography, Grid} from '@mui/material'

export default function EventDetailsPage() {
    const match = useRouteMatch<{id?: string}>('/events/:id')
    const {data} = useDocument({name: 'event', id: match?.params.id ?? 'Missing ID'})
    const {title, date, poster, durationVal, durationType, location, photos} = data ?? {}
    const dateStr = moment(date).format('MMM DD YYYY, LT')
    const dateEndStr = moment(date).add(durationVal, durationType).format('LT')
    const dateLocation = `${dateStr} - ${dateEndStr} | ${location}`
    const isEnabledSignUp = moment().isSameOrBefore(date)

    return (
        <>
            <NavigationBar />
            <Section>
                <ButtonBase sx={{p: 1, alignSelf: 'flex-start'}} onClick={() => window.history.back()}>
                    <Typography fontSize={'1.8rem'} lineHeight={0} mr={1}>
                        <ArrowBackIcon fontSize="inherit" />
                    </Typography>
                    <Typography variant="h5" lineHeight={'normal'} mt={0.15}>
                        BACK
                    </Typography>
                </ButtonBase>
                {data ? (
                    <Stack sx={{backgroundColor: 'grey.A100', borderRadius: 1, alignItems: 'center', p: 2, gap: 2}}>
                        <Stack
                            component="img"
                            sx={{
                                maxHeight: 300,
                                maxWidth: '100%',
                                objectFit: 'cover',
                                aspectRatio: String(16 / 10),
                                borderRadius: 1,
                            }}
                            src={poster?.formats.large?.url ?? poster?.url}
                            alt={poster?.name}
                        />
                        <Stack maxWidth={'md'} spacing={2}>
                            <Typography variant="subtitle1" textAlign="center">
                                {dateLocation}
                            </Typography>
                            <Typography variant="h5" fontWeight="700" textAlign="center">
                                {title}
                            </Typography>
                            <Typography>
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.description}</ReactMarkdown>
                            </Typography>
                            <Stack direction="row" alignSelf="center" width={'100%'} maxWidth="sm" spacing={2}>
                                <Stack flex={1}>
                                    <SignupButton closed={!isEnabledSignUp} href={data.joinLink} />
                                </Stack>

                                {isEnabledSignUp && <CalendarButton {...data} />}
                            </Stack>
                        </Stack>
                        <Grid container spacing={2} sx={{my: 5}}>
                            {photos?.map((photo, index) => (
                                <Grid item key={index} xs={12} sm={6}>
                                    <PhotoCard {...photo} />
                                </Grid>
                            ))}
                        </Grid>
                    </Stack>
                ) : null}
            </Section>
            <Footer />
        </>
    )
}

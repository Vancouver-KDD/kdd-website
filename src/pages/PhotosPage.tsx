import React from 'react'
import moment from 'moment'
import {Footer, Section, NavigationBar, PhotoCard} from 'components'
import {useCollection} from 'store'
import {Typography, Stack, Grid, Button} from '@mui/material'
import type {PhotoType} from 'types'

export default function PhotosPage() {
    const {data: photos, loading, error, loadMore} = useCollection({name: 'photos'})
    return (
        <>
            <NavigationBar />
            <Section>
                <Typography mt={4} mb={2} variant="h4" fontWeight="700">
                    Photos
                </Typography>
                <Grid container spacing={1}>
                    {photos?.map?.((photo, index) => {
                        return (
                            <React.Fragment key={photo.id}>
                                {isDisplayCreateDate(index, photos) && (
                                    <Grid item xs={12}>
                                        <Typography mt={1} width="100%" fontWeight="700" variant="h6">
                                            {moment(photo.created_at).format('LL')}
                                        </Typography>
                                    </Grid>
                                )}
                                <Grid item xs={12} sm={6} mb={4}>
                                    <PhotoCard {...photo} />
                                </Grid>
                            </React.Fragment>
                        )
                    })}
                </Grid>
                <Stack alignItems="center">
                    {loading && <span>loading...</span>}
                    {!!error && <span>ERROR: {error.message}</span>}
                    <Button onClick={loadMore} variant="contained" size={'large'} disableElevation>
                        Load More Photos
                    </Button>
                </Stack>
            </Section>
            <Footer />
        </>
    )
}

const isDisplayCreateDate = (index = 0, photos: PhotoType[] | null = null) => {
    if (!photos || !Array.isArray(photos)) {
        return false
    }

    const currentCreateDate = photos[index].created_at
    const previousCreateDate = !index ? null : photos[index - 1].created_at

    return !moment(currentCreateDate).isSame(previousCreateDate, 'day')
}

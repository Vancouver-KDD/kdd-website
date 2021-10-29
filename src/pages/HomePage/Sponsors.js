import React from 'react'
import {Image} from 'components/Image'
import {createUseStyles} from 'react-jss'
import {useCollection} from 'store'
import {Typography, Stack} from '@mui/material'

export default function Sponsors() {
    const classes = useStyles()
    const {data, loading, error} = useCollection({name: 'sponsors'})

    return (
        <Stack
            component="section"
            pt={5}
            pb={5}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                width: '100%',
                minHeight: 214,
                backgroundColor: 'hsla(0, 0%, 92%, 1)',
            }}>
            <Typography variant="h6" fontWeight={700} mb={2}>
                Proudly sponsored by
            </Typography>
            <Stack sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                {loading && <span>loading...</span>}
                {!!error && <span>ERROR: {error.message}</span>}
                {data?.map?.((sponsor) => {
                    const imageUrl = sponsor?.logo?.[0]?.formats?.small?.url || sponsor?.logo?.[0]?.url
                    return (
                        <Stack key={sponsor.id} margin={2}>
                            <Image className={classes.sponsorImage} img={imageUrl} url={sponsor.url} alt={`${sponsor.name} logo`} />
                        </Stack>
                    )
                })}
            </Stack>
        </Stack>
    )
}

const useStyles = createUseStyles({
    sponsorImage: {
        width: 260,
        maxHeight: 80,
        objectFit: 'contain',
    },
})

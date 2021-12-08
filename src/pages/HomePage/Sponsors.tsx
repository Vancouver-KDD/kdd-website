import React from 'react'
import {useCollection} from 'store'
import {Box, ButtonBase, Typography, Stack} from '@mui/material'

export default function Sponsors() {
    const {data, loading, error} = useCollection({name: 'sponsors'})

    return (
        <Stack
            component="section"
            py={5}
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                minHeight: 214,
                backgroundColor: 'hsla(0, 0%, 92%, 1)',
            }}>
            <Typography variant="h4" fontWeight={700} mb={2}>
                Sponsors
            </Typography>
            <Stack direction="row" sx={{flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}} spacing={2}>
                {loading && <span>loading...</span>}
                {!!error && <span>ERROR: {error.message}</span>}
                {data?.map?.((sponsor) => {
                    const imageUrl = sponsor?.logo?.formats?.small?.url || sponsor?.logo?.url
                    return (
                        <ButtonBase href={sponsor.url} key={sponsor.id}>
                            <Box
                                component="img"
                                sx={{
                                    width: 260,
                                    maxHeight: 80,
                                    objectFit: 'contain',
                                }}
                                src={imageUrl}
                                alt={`${sponsor.name} logo`}
                            />
                        </ButtonBase>
                    )
                })}
            </Stack>
        </Stack>
    )
}

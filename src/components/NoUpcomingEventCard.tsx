import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import comingSoon from 'assets/images/coming-soon.jpg'

export default function NoUpcomingEventCard({label}: {label: string}) {
    return (
        <Stack
            direction={{xs: 'column', md: 'row'}}
            sx={{
                borderRadius: 2,
                overflow: 'hidden',
                alignItems: {xs: 'center', md: 'stretch'},
            }}>
            <Box
                component="img"
                sx={{
                    maxHeight: 300,
                    width: {xs: '100%', md: '50%'},
                    objectFit: 'cover',
                    aspectRatio: {xs: '4 / 3', md: '16 / 10'},
                }}
                src={comingSoon}
                alt={'calendar'}
            />
            <Stack sx={{zIndex: 1, backgroundColor: 'grey.100', p: 3, width: {xs: '100%', md: '50%'}}} spacing={2}>
                <Stack sx={{justifyContent: 'center', flex: 1, textAlign: 'center'}} spacing={2}>
                    <Typography variant={'h5'} fontWeight="bold">
                        No {label}
                    </Typography>
                    <Typography variant="h6">Check Back Soon!</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

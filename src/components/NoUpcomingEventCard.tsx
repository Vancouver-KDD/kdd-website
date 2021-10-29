import React from 'react'
import {Stack, Typography} from '@mui/material'
import comingSoon from 'assets/images/coming-soon.jpg'

export default function NoUpcomingEventCard({label}: {label: string}) {
    return (
        <Stack
            sx={{
                borderRadius: 2,
                overflow: 'hidden',
                alignItems: {sm: 'center', md: 'stretch'},
                flexDirection: {sm: 'column', md: 'row'},
            }}>
            <Stack
                component="img"
                sx={{
                    maxHeight: 300,
                    width: {sm: '100%', md: '50%'},
                    objectFit: 'cover',
                    aspectRatio: {sm: '4 / 3', md: '16 / 10'},
                }}
                src={comingSoon}
                alt={'calendar'}
            />
            <Stack sx={{zIndex: 1, backgroundColor: 'grey.100', p: 3, width: {sm: '100%', md: '50%'}}} gap={2}>
                <Stack sx={{justifyContent: 'center', flex: 1, textAlign: 'center'}} gap={2}>
                    <Typography variant={'h5'} fontWeight="bold">
                        No {label}
                    </Typography>
                    <Typography variant="h6">Check Back Soon!</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

import React from 'react'
import {useCollection} from 'store'
import {Typography, Stack, Box, Link} from '@mui/material'

export default function Footer() {
    const {data} = useCollection({name: 'statistics'})

    return (
        <Box
            component="footer"
            sx={{
                height: 'auto',
                padding: 1,
                color: 'hsla(240, 52%, 11%, 1)',
                fontWeight: '700',
                textAlign: 'center',
                padding: {
                    xs: 0.5,
                    sm: 3,
                    md: 6,
                },

                '& div': {
                    mt: 1,
                },
                '& a': {
                    padding: {
                        xs: 0.5,
                        sm: 0.75,
                    },
                    color: 'hsla(240, 52%, 11%, 1)',
                },
            }}>
            <Box>
                Developed by{' '}
                {data?.developers?.map?.(({name, link}, i) => (
                    <Link key={i} href={link}>
                        {name}
                    </Link>
                ))}
            </Box>
            <Box>
                Special thanks to{' '}
                {data?.supporters?.map?.(({name, link}, i) => (
                    <Link key={i} href={link}>
                        {name}
                    </Link>
                ))}
            </Box>
        </Box>
    )
}

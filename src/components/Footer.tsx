import React from 'react'
import {useDocument} from 'store'
import {Typography, Stack} from '@mui/material'
import {Section, Link} from 'components'

export default function Footer() {
    const {data} = useDocument({name: 'footer'})

    return (
        <Section component="footer" my={4} spacing={1}>
            <Typography variant="h5" textAlign="center" fontWeight="bold">
                Developed by{' '}
            </Typography>
            <Stack direction="row" flexWrap="wrap" justifyContent="center" spacing={2} pb={2}>
                {data?.developers?.map?.(({name, link}, i) => (
                    <Link component="a" key={i} href={link} color="text.primary" fontWeight="600">
                        {name}
                    </Link>
                ))}
            </Stack>
            <Typography variant="h5" textAlign="center" fontWeight="bold">
                Special thanks to{' '}
            </Typography>
            <Stack direction="row" flexWrap="wrap" justifyContent="center" spacing={2}>
                {data?.supporters?.map?.(({name, link}, i) => (
                    <Link component="a" key={i} href={link} color="text.primary" fontWeight="600">
                        {name}
                    </Link>
                ))}
            </Stack>
        </Section>
    )
}

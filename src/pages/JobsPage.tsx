import React from 'react'
import {Section, Footer, NavigationBar} from 'components'
// import {useCollection} from 'store'
import {Stack, Typography} from '@mui/material'

export default function JobsPage() {
    // const {data} = useCollection({name: 'jobs'})

    return (
        <>
            <NavigationBar />
            <Section spacing={8} mt={5}>
                <Stack>
                    <Typography>Hello</Typography>
                </Stack>
            </Section>
            <Footer />
        </>
    )
}

import React from 'react'
import {Stack} from '@mui/material'
import type {StackProps} from '@mui/material'

const Section: typeof Stack = (props: StackProps) => {
    return (
        <Stack p={1} width="100%" alignItems="center">
            <Stack width={'100%'} maxWidth="md" {...props} />
        </Stack>
    )
}

export default Section

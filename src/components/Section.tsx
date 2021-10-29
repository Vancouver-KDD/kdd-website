import React, {FC} from 'react'
import {Stack, StackProps} from '@mui/material'

const Section: FC<StackProps> = ({children, ...props}) => {
    return (
        <Stack p={1} width="100%" alignItems="center">
            <Stack width={'100%'} maxWidth="md" {...props}>
                {children}
            </Stack>
        </Stack>
    )
}

export default Section

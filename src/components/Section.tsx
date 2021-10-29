import React, {FC} from 'react'
import {Box, BoxProps} from '@mui/material'

const Section: FC<BoxProps> = ({children, ...props}) => {
    return (
        <Box p={1} width="100%" alignItems="center">
            <Box width={'100%'} maxWidth="md" {...props}>
                {children}
            </Box>
        </Box>
    )
}

export default Section

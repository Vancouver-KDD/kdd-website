import React from 'react'
import {Button, Typography} from '@mui/material'

export default function ClosedButton() {
    return (
        <Button
            disabled
            sx={{
                cursor: 'not-allowed',
                height: 48,
                borderRadius: 24,
                backgroundColor: 'grey.500',
                pointerEvents: 'none',
                textAlign: 'center',
                width: '100%',
                fontWeight: '500',
            }}>
            <Typography variant="button" color="white">
                Closed
            </Typography>
        </Button>
    )
}

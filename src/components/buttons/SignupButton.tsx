import React from 'react'
import {Button, Typography} from '@mui/material'

export default function SignupButton({href}: {href: string}) {
    return (
        <Button
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
            href={href}
            sx={{
                height: 48,
                borderRadius: 24,
                color: 'primary.contrastText',
                backgroundColor: 'primary.main',
                '&:hover': {
                    backgroundColor: 'primary.light',
                },
            }}>
            <Typography variant="button">Sign Up</Typography>
        </Button>
    )
}

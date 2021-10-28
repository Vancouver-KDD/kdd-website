import React from 'react'
import {ButtonBase, Typography} from '@mui/material'

export default function SignupButton({href, closed = false}: {href: string; closed: boolean}) {
    if (closed) {
        return (
            <ButtonBase
                disableRipple
                sx={{
                    cursor: 'not-allowed',
                    height: 48,
                    borderRadius: 24,
                    backgroundColor: 'grey.500',
                    color: 'white',
                }}>
                <Typography variant="button">Closed</Typography>
            </ButtonBase>
        )
    }
    return (
        <ButtonBase
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
        </ButtonBase>
    )
}

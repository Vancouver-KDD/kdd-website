import React, {useState} from 'react'
import {Dialog, DialogTitle, DialogContent, DialogContentText, Stack, Box, ButtonBase, Typography} from '@mui/material'
import type {PhotoType} from 'types'

export default function PhotoCard({photo, title, description}: PhotoType) {
    const imageUrl = photo?.[0]?.formats?.medium?.url || photo?.[0]?.url
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <DialogTitle sx={{fontWeight: 'bold', textAlign: 'center'}}>{title}</DialogTitle>
                <DialogContent>
                    <Box component="img" sx={{width: '100%'}} src={imageUrl} alt={description} />
                    <DialogContentText>{description}</DialogContentText>
                </DialogContent>
            </Dialog>
            <Stack alignItems="center">
                <ButtonBase disableRipple onClick={() => setIsOpen(true)}>
                    <Stack>
                        <Box
                            component="img"
                            sx={{
                                borderRadius: 2,
                                maxHeight: 250,
                                aspectRatio: '16/9',
                                maxWidth: 'sm',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                            src={imageUrl}
                            loading="lazy"
                            alt={description}
                        />
                        <Typography variant="h6" fontWeight="bold" textAlign="center">
                            {title}
                        </Typography>
                        <Typography variant="body1">{description}</Typography>
                    </Stack>
                </ButtonBase>
            </Stack>
        </>
    )
}

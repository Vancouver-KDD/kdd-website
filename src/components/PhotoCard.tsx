import React, {useState} from 'react'
import {Dialog, DialogTitle, DialogContent, DialogContentText, Stack, Box, Typography, Paper} from '@mui/material'
import type {PhotoType} from 'types'
import Carousel from 'react-material-ui-carousel'

export default function PhotoCard({photo, title, description}: PhotoType) {
    const [imageUrl, setImageUrl] = useState(photo?.[0]?.formats?.medium?.url || photo?.[0]?.url)
    const [isOpen, setIsOpen] = useState(false)
    const handleClickOpen = (imageUrl: string) => () => {
        setIsOpen(true)
        setImageUrl(imageUrl)
    }

    return (
        <>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <DialogTitle sx={{fontWeight: 'bold', textAlign: 'center'}}>{title}</DialogTitle>
                <DialogContent>
                    <Box component="img" sx={{width: '100%'}} src={imageUrl} alt={description} />
                    <DialogContentText>{description}</DialogContentText>
                </DialogContent>
            </Dialog>
            <Stack>
                <Typography variant="h6" fontWeight="bold" textAlign="left">
                    {title}
                </Typography>
                <Typography variant="body1">{description}</Typography>
                <Carousel
                    fullHeightHover={false}
                    navButtonsProps={{
                        style: {
                            backgroundColor: 'tan',
                            borderRadius: 0,
                        },
                    }}>
                    {photo.map((item, i) => (
                        <Paper>
                            <img
                                key={i}
                                src={item.url}
                                alt={title}
                                height="100%"
                                width="100%"
                                onClick={handleClickOpen(item.url)}
                                style={{cursor: 'pointer'}}
                            />
                        </Paper>
                    ))}
                </Carousel>
            </Stack>
        </>
    )
}

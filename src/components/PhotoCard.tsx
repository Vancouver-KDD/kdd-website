import React, {useState} from 'react'
import {Dialog, DialogTitle, DialogContent, DialogContentText, Stack, Box, ButtonBase, Typography} from '@mui/material'
import type {PhotoType} from 'types'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function PhotoCard({photo, title, description}: PhotoType) {
    //const imageUrl = photo?.[0]?.formats?.medium?.url || photo?.[0]?.url
    const [imageUrl, setImageUrl] = useState(photo?.[0]?.formats?.medium?.url || photo?.[0]?.url)
    const [isOpen, setIsOpen] = useState(false)
    const handleClickOpen = (imageUrl: string) => () => {
        setIsOpen(true);
        setImageUrl(imageUrl);
      };

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
                
                    <Stack>
                        <ImageList sx={{ width: '100%', height: '100%', maxHeight: 500 }} cols={2} rowHeight={164}>
                            {photo.map((item) => (
                            <ButtonBase disableRipple onClick={handleClickOpen(item.url)}>
                            <ImageListItem key={item.name}>
                            <img
                                src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.name}
                                loading="lazy"
                            />
                            </ImageListItem>
                            </ButtonBase>
                            ))}
                        </ImageList>
                        <Typography variant="h6" fontWeight="bold" textAlign="center">
                            {title}
                        </Typography>
                        <Typography variant="body1">{description}</Typography>
                    </Stack>
                
            </Stack>
        </>
    )
}

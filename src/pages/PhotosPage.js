import React, {useState} from 'react'
import moment from 'moment'
import {Button} from 'components/buttons'
import {Footer, Modal, NavigationBar, PhotoCard} from 'components'
import {useCollection} from 'store'
import {Typography, Stack, Box} from '@mui/material'

export default function PhotosPage() {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [photoUrl, setPhotoUrl] = useState('')
    const [photoDescription, setPhotoDescription] = useState('')
    const [photoAuthor, setPhotoAuthor] = useState('')

    const {data: photos, loading, error, loadMore} = useCollection({name: 'photos'})
    const toggleModal = () => {
        if (isModalVisible) {
            document.body.style.overflow = 'auto'
        } else {
            document.body.style.overflow = 'hidden'
        }
        setIsModalVisible(!isModalVisible)
    }
    const handlPhroCardClick = (url, description, author) => {
        setPhotoUrl(url)
        setPhotoDescription(description)
        setPhotoAuthor(author)
        toggleModal()
    }

    return (
        <>
            <NavigationBar />
            <Modal
                photoUrl={photoUrl}
                photoDescription={photoDescription}
                photoAuthor={photoAuthor}
                visible={isModalVisible}
                toggleModal={toggleModal}
            />
            <Box
                width={{
                    xs: 375,
                    sm: 550,
                    md: 1024,
                }}
                position="relative"
                margin="0 auto">
                <Typography mb={3} variant="h4" fontWeight="700">
                    Photos
                </Typography>
                <Stack>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                        }}>
                        {photos?.map?.((photo, index) => {
                            const imageUrl = photo.photo?.[0]?.formats?.medium?.url || photo.photo?.[0]?.url
                            return (
                                <React.Fragment key={photo.id}>
                                    {isDisplayCreateDate(index, photos) && (
                                        <Typography my={0.5} width="100%" fontWeight="700" variant="h4">
                                            {moment(photo.created_at).format('LL')}
                                        </Typography>
                                    )}
                                    <PhotoCard
                                        src={imageUrl}
                                        alt={photo.description}
                                        description={photo.description}
                                        author={photo.uploader_name}
                                        onClick={() => handlPhroCardClick(imageUrl, photo.description, photo.uploader_name)}
                                    />
                                </React.Fragment>
                            )
                        })}
                    </Box>
                </Stack>
            </Box>
            <Stack alignItems="center">
                {loading && <span>loading...</span>}
                {!!error && <span>ERROR: {error.message}</span>}
                <Button onClick={loadMore} text={'Load More Photos'} />
            </Stack>
            <Footer />
        </>
    )
}

const isDisplayCreateDate = (index = 0, photos = null) => {
    if (!photos || !Array.isArray(photos)) return false

    const currentCreateDate = photos[index].created_at
    const previousCreateDate = !index ? null : photos[index - 1].created_at

    return !moment(currentCreateDate).isSame(previousCreateDate, 'day')
}

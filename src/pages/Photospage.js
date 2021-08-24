import React, {useState} from 'react'
import {createUseStyles} from 'react-jss'
import moment from 'moment'
import {Button} from 'common/Button'
import NavigationBar from 'components/NavigationBar'
import PhotoCard from 'components/PhotoCard'
import Footer from 'components/Footer'
import {Modal} from 'common/Modal'
import {useCollection} from 'store'

const Photospage = () => {
    const classes = useStyles()

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
        <div>
            <NavigationBar />
            <Modal
                photoUrl={photoUrl}
                photoDescription={photoDescription}
                photoAuthor={photoAuthor}
                visible={isModalVisible}
                toggleModal={toggleModal}
            />
            <div className={classes.wrap}>
                <h1>Photos</h1>
                <div className={classes.photoBox}>
                    <div className={classes.photoCardList}>
                        {photos?.map((photo, index) => {
                            const imageUrl = photo?.photo?.[0]?.formats?.medium?.url || photo?.photo?.[0]?.url
                            return (
                                <>
                                    {!!index || <h2>{moment(photo.created_at).format('LL')}</h2>}
                                    {moment(photo.created_at).isSame(moment(photos[Math.max(index - 1, 0)].created_at), 'day') || (
                                        <h2>{moment(photo.created_at).format('LL')}</h2>
                                    )}
                                    <PhotoCard
                                        key={photo.id}
                                        src={imageUrl}
                                        alt={photo.description}
                                        description={photo.description}
                                        author={photo.uploader_name}
                                        onClick={() => handlPhroCardClick(imageUrl, photo.description, photo.uploader_name)}
                                    />
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {loading && <span>loading...</span>}
                {!!error && <span>ERROR: {error.message}</span>}
                <Button onClick={loadMore} text={'Load More Photos'} />
            </div>
            <Footer />
        </div>
    )
}

const useStyles = createUseStyles(() => ({
    wrap: {
        position: 'relative',
        width: '375px',
        margin: 'auto',
        '@media (min-width: 800px)': {
            width: '758px',
        },
        '@media (min-width: 1024px)': {
            width: '1024px',
        },
    },
    photoBox: {
        position: 'relative',
        margin: '3rem 0px',
    },
    photoCardList: {
        display: 'flex',
        flexWrap: 'wrap',
        '& h2': {
            fontSize: '2.8rem',
            fontWeight: '600',
            margin: '4px 0px',
            width: '375px',
            '@media (min-width: 800px)': {
                width: '758px',
            },
            '@media (min-width: 1024px)': {
                width: '1024px',
            },
        },
    },
    photoCardPick: {
        color: 'black',
    },
}))

export default Photospage

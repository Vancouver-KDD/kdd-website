import React, {useState} from 'react'
import {createUseStyles} from 'react-jss'
import moment from 'moment'
import {Button} from 'components/buttons/Button'
import NavigationBar from 'components/NavigationBar'
import PhotoCard from 'components/PhotoCard'
import Footer from 'components/Footer'
import Modal from 'components/Modal'
import {useCollection} from 'store'

export default function PhotosPage() {
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
                            const imageUrl = photo.photo?.[0]?.formats?.medium?.url || photo.photo?.[0]?.url
                            return (
                                <React.Fragment key={photo.id}>
                                    {isDisplayCreateDate(index, photos) && <h2>{moment(photo.created_at).format('LL')}</h2>}
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

const isDisplayCreateDate = (index = 0, photos = null) => {
    if (!photos || !Array.isArray(photos)) return false

    const currentCreateDate = photos[index].created_at
    const previousCreateDate = !index ? null : photos[index - 1].created_at

    return !moment(currentCreateDate).isSame(previousCreateDate, 'day')
}

const useStyles = createUseStyles({
    wrap: {
        position: 'relative',
        width: 375,
        margin: 'auto',
        '@media (min-width: 800px)': {
            width: 758,
        },
        '@media (min-width: 1024px)': {
            width: 1024,
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
            width: 375,
            '@media (min-width: 800px)': {
                width: 758,
            },
            '@media (min-width: 1024px)': {
                width: 1024,
            },
        },
    },
    photoCardPick: {
        color: 'black',
    },
})

import React, {useState} from 'react'
import {createUseStyles} from 'react-jss'
import {Link} from 'react-router-dom'
import {ArrowButton} from 'common/ArrowButton'
import PhotoCard from './PhotoCard'
import {getPostList} from '../DemoPhotoData'

function PhotoCards() {
    const [currentCardNo, setCurrentCardNo] = useState(0)
    const [photoList] = useState(getPostList())
    const listSize = photoList.length
    const [cardListSize] = useState(listSize)
    const classes = useStyles(currentCardNo)

    /* eslint-disable no-param-reassign */
    const handleClick = (index) => {
        if (cardListSize <= index) index = 0
        if (index < 0) index = cardListSize - 1
        setCurrentCardNo(index)
    }

    return (
        <div className={classes.photos}>
            <div className={classes.groupPhotos}>
                <div>
                    <h1>Photos</h1>
                    <div className={classes.groupArrowButton}>
                        <Link to="/photos">VIEW ALL</Link>
                        <ArrowButton direction="left" onClick={() => handleClick(currentCardNo - 1)} />
                        <ArrowButton direction="right" onClick={() => handleClick(currentCardNo + 1)} />
                    </div>
                </div>
                <div className={classes.photoBox}>
                    <div className={classes.photoCardList}>
                        {photoList.map((photo) => (
                            <PhotoCard
                                src={photo.image_url}
                                alt={photo.description}
                                description={photo.description}
                                author={photo.uploader_name}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const useStyles = createUseStyles(() => ({
    photos: {
        position: 'relative',
        width: '375px',
        height: '370px',
        textAlign: 'center',
        margin: 'auto',
        '& h1': {
            marginTop: '4rem',
            fontSize: '3.5rem',
        },
        '@media (min-width: 800px)': {
            width: '756px',
        },
        '@media (min-width: 1024px)': {
            width: '1022px',
            height: '400px',
        },
    },
    photoBox: {
        position: 'relative',
        margin: 'auto',
        overflowX: 'hidden',
    },
    photoCardList: {
        display: 'flex',
        transition: 'all 300ms ease 0s',
        transform: (currentCardNo) => `translate3d(${currentCardNo * -379}px, 0px, 0px)`,
        '@media (min-width: 1024px)': {
            transform: (currentCardNo) => `translate3d(${currentCardNo * -512}px, 0px, 0px)`,
        },
    },
    groupArrowButton: {
        position: 'relative',
        display: 'inline-block',
        top: '0',
        left: '26%',
        '& a': {
            fontSize: '1.7rem',
        },
        '& button': {
            marginLeft: '7px',
        },
        '@media (min-width: 800px)': {
            left: '38.3%',
        },
        '@media (min-width: 1024px)': {
            left: '41%',
            '& button': {
                marginLeft: '12px',
            },
        },
    },
}))

export default PhotoCards

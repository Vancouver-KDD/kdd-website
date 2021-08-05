import React, {useState} from 'react'
import {createUseStyles} from 'react-jss'
import {ArrowButton} from 'common/ArrowButton'
import PhotoCard from './PhotoCard'

function PhotoCards() {
    const [currentCardNo, setCurrentCardNo] = useState(0)
    const [cardListSize] = useState(4)
    const classes = useStyles(currentCardNo)

    /* eslint-disable no-param-reassign */
    const handlerArrowOnClick = (index) => {
        if (cardListSize <= index) index = 0
        if (index < 0) index = cardListSize - 1
        setCurrentCardNo(index)
        console.log(currentCardNo)
    }

    return (
        <div className={classes.photos}>
            <div className={classes.groupPhotos}>
                <div>
                    <h1>Photos</h1>
                    <div className={classes.groupArrowButton}>
                        <ArrowButton direction="left" onClick={() => handlerArrowOnClick(currentCardNo - 1)} />
                        <ArrowButton direction="right" onClick={() => handlerArrowOnClick(currentCardNo + 1)} />
                    </div>
                </div>
                <div className={classes.photoBox}>
                    <div className={classes.photoCardList}>
                        <PhotoCard src="temp_photo1.png" alt="test photo1" />
                        <PhotoCard src="temp_photo2.png" alt="test photo2" />
                        <PhotoCard src="temp_photo1.png" alt="test photo1" />
                        <PhotoCard src="temp_photo2.png" alt="test photo2" />
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
    },
    photoBox: {
        position: 'relative',
        margin: 'auto',
        overflowX: 'hidden',
    },
    photoCardList: {
        width: '1500px',
        overflow: 'hidden',
        transition: 'all 300ms ease 0s',
        transform: (currentCardNo) => `translate3d(${currentCardNo * -375}px, 0px, 0px)`,
        display: 'flex',
    },
    groupArrowButton: {
        position: 'relative',
        display: 'inline-block',
        top: '0',
        left: '38%',
    },
}))

export default PhotoCards

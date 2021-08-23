import React, {useState} from 'react'
import {createUseStyles} from 'react-jss'
import {Link} from 'react-router-dom'
import {ArrowButton} from 'common/ArrowButton'
import PhotoCard from './PhotoCard'
import {useCollection} from 'store'

function PhotoCards() {
    const TODO_NUM = 1
    const [currentCardNo, setCurrentCardNo] = useState(0)
    const [leftDisabled, setLeftDisabled] = useState(true)
    const [rightDisabled, setRightDisabled] = useState(false)
    const {data: photos, loading, error} = useCollection({name: 'photos'})
    const cardListSize = photos?.length ?? 0
    const classes = useStyles(currentCardNo)

    const handleClick = (index) => {
        if (0 <= index && index < cardListSize - TODO_NUM) {
            setCurrentCardNo(index)
        }

        if (cardListSize - 1 - TODO_NUM === index) {
            setLeftDisabled(false)
            setRightDisabled(true)
        } else if (0 === index) {
            setLeftDisabled(true)
            setRightDisabled(false)
        } else {
            setLeftDisabled(false)
            setRightDisabled(false)
        }
    }

    return (
        <div className={classes.photos}>
            <div className={classes.groupPhotos}>
                <div>
                    <h1>Photos</h1>
                    <div className={classes.groupArrowButton}>
                        <Link to="/photos">VIEW ALL</Link>
                        <ArrowButton direction="left" onClick={() => handleClick(currentCardNo - 1)} disabled={leftDisabled} />
                        <ArrowButton direction="right" onClick={() => handleClick(currentCardNo + 1)} disabled={rightDisabled} />
                    </div>
                </div>
                <div className={classes.photoBox}>
                    <div className={classes.photoCardList}>
                        {loading && <span>loading...</span>}
                        {!!error && <span>ERROR: {error.message}</span>}
                        {photos?.map((photo) => {
                            const imageUrl = photo?.photo?.[0]?.formats?.medium?.url || photo?.photo?.[0]?.url
                            return (
                                <PhotoCard
                                    key={photo.id}
                                    src={imageUrl}
                                    alt={photo.description}
                                    description={photo.description}
                                    author={photo.uploader_name}
                                />
                            )
                        })}
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

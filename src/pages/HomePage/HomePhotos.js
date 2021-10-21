import React, {useState} from 'react'
import {createUseStyles} from 'react-jss'
import {Link} from 'react-router-dom'
import {ArrowButton} from 'components/buttons/ArrowButton'
import PhotoCard from 'components/PhotoCard'
import {useCollection} from 'store'

const TODO_NUM = 1

export default function HomePhotos() {
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
                        {photos?.map?.((photo) => {
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

const useStyles = createUseStyles({
    photos: {
        position: 'relative',
        width: 375,
        maxWidth: '100%',
        height: 370,
        textAlign: 'center',
        margin: 'auto',
        '& h1': {
            marginTop: '4rem',
            // fontSize: '3.5rem',
        },
        '@media (min-width: 800px)': {
            width: 756,
        },
        '@media (min-width: 1024px)': {
            width: 1022,
            height: 400,
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
        transform: (currentCardNo) => `translate3d(${currentCardNo * -375}px, 0px, 0px)`,
        '@media (min-width: 1024px)': {
            transform: (currentCardNo) => `translate3d(${currentCardNo * -512}px, 0px, 0px)`,
        },
    },
    groupArrowButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 4,
        '& a': {
            // fontSize: '1.3rem',
            fontWeight: '600',
        },
        '& button': {
            marginLeft: 7,
        },
    },
})

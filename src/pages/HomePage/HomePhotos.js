import React, {useState} from 'react'
import {createUseStyles} from 'react-jss'
import {Link} from 'react-router-dom'
import {ArrowButton} from 'components/buttons/ArrowButton'
import PhotoCard from 'components/PhotoCard'
import {useCollection} from 'store'
import {Typography, Box} from '@mui/material'

const TODO_NUM = 1

export default function HomePhotos() {
    const [currentCardNo, setCurrentCardNo] = useState(0)
    const [leftDisabled, setLeftDisabled] = useState(true)
    const [rightDisabled, setRightDisabled] = useState(false)
    const {data: photos, loading, error} = useCollection({name: 'photos'})
    const cardListSize = photos?.length ?? 0

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
        <Box
            sx={{
                position: 'relative',
                width: 375,
                maxWidth: '100%',
                height: 370,
                textAlign: 'center',
                margin: 'auto',
                overflowX: 'hidden',
                '& h4': {
                    marginTop: 4,
                    // fontSize: '3.5rem',
                },
                '@media (min-width: 800px)': {
                    width: 756,
                },
                '@media (min-width: 1024px)': {
                    width: 1022,
                    height: '100%',
                },
            }}>
            <Box>
                <Box>
                    <Typography variant="h4" fontWeight={700}>
                        Photos
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            marginBottom: 1,
                            '& a': {
                                // fontSize: '1.3rem',
                                fontWeight: '600',
                            },
                            '& button': {
                                marginLeft: 1,
                            },
                        }}>
                        <Link to="/photos">VIEW ALL</Link>
                        <ArrowButton direction="left" onClick={() => handleClick(currentCardNo - 1)} disabled={leftDisabled} />
                        <ArrowButton direction="right" onClick={() => handleClick(currentCardNo + 1)} disabled={rightDisabled} />
                    </Box>
                </Box>
                <Box overflowX="hidden">
                    <Box
                        sx={{
                            position: 'relative',
                            margin: 'auto',
                        }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                transition: 'all 300ms ease 0s',
                                transform: (currentCardNo) => {
                                    console.log(currentCardNo)
                                    return `translate3d(${currentCardNo * -375} px, 0px, 0px)`
                                },
                                '@media (min-width: 1024px)': {
                                    transform: (currentCardNo) => `translate3d(${currentCardNo * -512}px, 0px, 0px)`,
                                },
                            }}>
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
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {ArrowButton} from 'components/buttons/ArrowButton'
import PhotoCard from 'components/PhotoCard'
import {useCollection} from 'store'
import {Typography, Stack} from '@mui/material'

export default function HomePhotos() {
    const [currentCardNo, setCurrentCardNo] = useState(0)
    const {data: photos, loading, error} = useCollection({name: 'photos', limit: 24})
    const cardListSize = photos?.length ?? 0

    const leftDisabled = currentCardNo <= 0
    const rightDisabled = currentCardNo >= cardListSize - 2

    const handleClick = (index: number) => {
        setCurrentCardNo(index)
    }

    return (
        <Stack
            sx={{
                position: 'relative',
                width: '100%',
                maxWidth: 'md',
                // width: 375,
                // maxWidth: '100%',
                // height: 370,
                textAlign: 'center',
                margin: 'auto',
                overflowX: 'hidden',
                '& h4': {
                    marginTop: 4,
                    // fontSize: '3.5rem',
                },
                // '@media (min-width: 800px)': {
                //     width: 756,
                // },
                // '@media (min-width: 1024px)': {
                //     width: 1022,
                //     height: '100%',
                // },
            }}>
            <Stack>
                <Stack>
                    <Typography variant="h4" fontWeight={700}>
                        Photos
                    </Typography>
                    <Stack
                        direction="row"
                        sx={{
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            mb: 1,
                            '& a': {
                                fontWeight: '600',
                            },
                            '& button': {
                                ml: 1,
                            },
                        }}>
                        <Link to="/photos">VIEW ALL</Link>
                        <ArrowButton direction="left" onClick={() => handleClick(currentCardNo - 1)} disabled={leftDisabled} />
                        <ArrowButton direction="right" onClick={() => handleClick(currentCardNo + 1)} disabled={rightDisabled} />
                    </Stack>
                </Stack>
                <Stack sx={{overflowX: 'hidden'}}>
                    <Stack
                        sx={{
                            position: 'relative',
                            m: 'auto',
                        }}>
                        <Stack
                            direction="row"
                            sx={{
                                transition: 'all 300ms ease 0s',
                                transform: {
                                    xs: `translate(${currentCardNo * -375}px, 0px)`,
                                    md: `translate(${currentCardNo * -512}px, 0px)`,
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
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

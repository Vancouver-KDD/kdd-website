import React, {useState} from 'react'
import {Section, PhotoCard, Link} from 'components'
import {ArrowButton} from 'components/buttons'
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
        <Section my={4}>
            <Typography variant="h4" fontWeight={700} textAlign="center">
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
            <Stack sx={{overflowX: 'hidden'}}>
                <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                        transition: 'all 300ms ease 0s',
                        transform: {
                            xs: `translate(${currentCardNo * -375}px, 0px)`,
                            md: `translate(${currentCardNo * -450}px, 0px)`,
                        },
                    }}>
                    {loading && <span>loading...</span>}
                    {!!error && <span>ERROR: {error.message}</span>}
                    {photos?.map?.((photo) => {
                        return (
                            <Stack key={photo.id} minWidth={370} maxWidth="100%" textAlign="center">
                                <PhotoCard {...photo} />
                            </Stack>
                        )
                    })}
                </Stack>
            </Stack>
        </Section>
    )
}

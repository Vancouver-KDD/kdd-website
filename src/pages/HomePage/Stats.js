import StatSmall from 'assets/images/stat-small.png'
import StatLarge from 'assets/images/stat-large.png'
import {useCollection} from 'store'
import {Typography, Box} from '@mui/material'

export default function Stats() {
    const {data} = useCollection({name: 'statistics'})

    return (
        <Box
            component="section"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: 'hsla(0, 0%, 100%, 1)',
                textAlign: 'center',
            }}>
            <Box
                sx={{
                    height: 543,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: 1024,
                    maxWidth: '100%',
                    '@media (min-width: 768px)': {
                        alignItems: 'initial',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                    },
                }}>
                <Box
                    sx={{
                        backgroundImage: `url(${StatSmall})`,
                        backgroundColor: 'white',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        height: 250,
                        width: 250,
                        '@media (min-width: 768px)': {
                            width: 'unset',
                            height: 'inherit',
                        },
                        '@media (min-width: 1024px)': {
                            backgroundImage: `url(${StatLarge})`,
                        },
                    }}
                    alt="Statistic image"
                />
                <Box
                    mt={5}
                    mb={5}
                    sx={{
                        color: 'rgba(14, 14, 44, 1)',
                        '& > h3': {
                            marginTop: 3,
                            marginBottom: 3,
                            fontWeight: 700,
                        },
                        '@media (min-width: 768px)': {
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        },
                    }}>
                    <Typography variant="h3">Since July 2017</Typography>
                    <Typography variant="h3">{data?.meetups ?? '39+'} Meetups</Typography>
                    <Typography variant="h3">{data?.members ?? '1250+'} Members</Typography>
                </Box>
            </Box>
        </Box>
    )
}

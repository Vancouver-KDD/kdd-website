import StatSmall from 'assets/images/stat-small.png'
import StatLarge from 'assets/images/stat-large.png'
import {useCollection} from 'store'
import {Typography, Stack} from '@mui/material'

export default function Stats() {
    const {data} = useCollection({name: 'statistics'})

    return (
        <Stack
            component="section"
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'background.default',
                textAlign: 'center',
            }}>
            <Stack
                sx={{
                    height: 543,
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: 'md',
                    '@media (min-width: 768px)': {
                        alignItems: 'initial',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                    },
                }}>
                <Stack
                    sx={{
                        backgroundImage: {
                            sm: `url(${StatSmall})`,
                            md: `url(${StatLarge})`,
                        },
                        backgroundColor: 'background.default',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        height: {sm: 250, md: 'inherit'},
                        width: {sm: 250, md: 'unset'},
                    }}
                    alt="Statistic image"
                />
                <Stack spacing={6} fontWeight="bold" color="text.primary" justifyContent="center">
                    <Typography variant="h3">Since July 2017</Typography>
                    <Typography variant="h3">{data?.meetups ?? '39+'} Meetups</Typography>
                    <Typography variant="h3">{data?.members ?? '1250+'} Members</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

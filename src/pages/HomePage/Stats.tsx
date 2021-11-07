import StatSmall from 'assets/images/stat-small.png'
import StatLarge from 'assets/images/stat-large.png'
import {useDocument} from 'store'
import {Typography, Stack} from '@mui/material'

export default function Stats() {
    const {data} = useDocument({name: 'statistics', id: '1'})

    return (
        <Stack
            component="section"
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'background.default',
            }}>
            <Stack
                direction={{
                    xs: 'column',
                    sm: 'row',
                }}
                sx={{
                    height: 543,
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: 'md',
                }}>
                <Stack
                    flex={1}
                    sx={{
                        backgroundImage: {
                            xs: `url(${StatSmall})`,
                            md: `url(${StatLarge})`,
                        },
                        backgroundColor: 'background.default',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        height: {xs: 250, sm: 'inherit'},
                        width: {xs: 250, sm: 'unset'},
                    }}
                />
                <Stack flex={1} spacing={6} color="text.primary" justifyContent="center" textAlign="center">
                    <Typography variant="h3" fontWeight="bold">
                        Since July 2017
                    </Typography>
                    <Typography variant="h3" fontWeight="bold">
                        {data?.meetups ?? '39+'} Meetups
                    </Typography>
                    <Typography variant="h3" fontWeight="bold">
                        {data?.members ?? '1250+'} Members
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

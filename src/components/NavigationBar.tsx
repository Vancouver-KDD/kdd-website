import React from 'react'
import kddLogo1 from 'assets/images/KDD-Logo1.svg'
import kddLogo2 from 'assets/images/KDD-Logo2.svg'
import {Stack, List, ListItem} from '@mui/material'
import {RouterLink} from 'components'

export default function NavigationBar() {
    const isHome = window.location.pathname === '/'

    return (
        <Stack
            component="nav"
            sx={{
                alignItems: 'center',
                p: 1,
                pt: 5,
                zIndex: 'appBar',
                width: '100%',
                position: isHome ? 'absolute' : 'relative',
                '& a': {
                    color: isHome ? 'primary.contrastText' : 'text.primary',
                },
            }}>
            <Stack
                direction={{
                    xs: 'column-reverse',
                    sm: 'row',
                }}
                sx={{
                    width: '100%',
                    maxWidth: 'md',
                    alignItems: {
                        xs: 'center',
                        sm: 'flex-start',
                    },
                    justifyContent: 'space-between',
                }}>
                <RouterLink to="/">
                    <img src={isHome ? kddLogo1 : kddLogo2} alt="KDD logo" />
                </RouterLink>
                <Stack component={List} direction="row" justifyContent={'space-between'}>
                    <RouterLink fontWeight="bold" underline="hover" to="/about-us">
                        <ListItem>About Us</ListItem>
                    </RouterLink>
                    <RouterLink fontWeight="bold" underline="hover" to="/events">
                        <ListItem>Events</ListItem>
                    </RouterLink>
                    {/* <RouterLink fontWeight="bold" underline="hover" to="/jobs">
                        <ListItem>Jobs</ListItem>
                    </RouterLink> */}
                    <RouterLink fontWeight="bold" underline="hover" to="/photos">
                        <ListItem>Photos</ListItem>
                    </RouterLink>
                </Stack>
            </Stack>
        </Stack>
    )
}

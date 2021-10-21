import React from 'react'
import kddLogo1 from 'assets/images/KDD-Logo1.svg'
import kddLogo2 from 'assets/images/KDD-Logo2.svg'
import {Box, List, ListItem, Link} from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'

export default function NavigationBar() {
    const isHome = window.location.pathname === '/'

    return (
        <Box
            component="nav"
            sx={{
                alignItems: 'center',
                p: 1,
                pt: 5,
                zIndex: 'appBar',
                width: '100%',
                position: isHome ? 'absolute' : 'relative',
                '& a': {
                    color: isHome ? '#ffffff' : '#0E0E2C',
                },
            }}>
            <Box
                sx={{
                    width: 1024,
                    maxWidth: '100%',
                    flexDirection: {
                        xs: 'column-reverse',
                        sm: 'row',
                    },
                    alignItems: {
                        xs: 'center',
                        sm: 'flex-start',
                    },
                    justifyContent: 'space-between',
                }}>
                <Link component={RouterLink} to="/">
                    <img src={isHome ? kddLogo1 : kddLogo2} alt="KDD logo" />
                </Link>
                <Box component={List} flexDirection="row" justifyContent={'space-between'}>
                    <Link fontWeight="bold" underline="hover" component={RouterLink} to="/about-us">
                        <ListItem>About Us</ListItem>
                    </Link>
                    <Link fontWeight="bold" underline="hover" component={RouterLink} to="/events">
                        <ListItem>Events</ListItem>
                    </Link>
                    <Link fontWeight="bold" underline="hover" component={RouterLink} to="/photos">
                        <ListItem>Photos</ListItem>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

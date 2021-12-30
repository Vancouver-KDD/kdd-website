import React from 'react'
import kddLogo1 from 'assets/images/KDD-Logo1.svg'
import kddLogo2 from 'assets/images/KDD-Logo2.svg'
import {Stack, List, ListItem} from '@mui/material'
import {Link} from 'components'

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
                <Link to="/">
                    <img src={isHome ? kddLogo1 : kddLogo2} alt="KDD logo" />
                </Link>
                <Stack component={List} direction="row" justifyContent={'space-between'}>
                    <Link fontWeight="bold" underline="hover" to="/about-us">
                        <ListItem>About Us</ListItem>
                    </Link>
                    <Link fontWeight="bold" underline="hover" to="/events">
                        <ListItem>Events</ListItem>
                    </Link>
                    {/* <Link fontWeight="bold" underline="hover" to="/jobs">
                        <ListItem>Jobs</ListItem>
                    </Link> */}
                    <Link fontWeight="bold" underline="hover" to="/photos">
                        <ListItem>Photos</ListItem>
                    </Link>
                </Stack>
            </Stack>
        </Stack>
    )
}

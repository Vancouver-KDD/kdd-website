import React, {useState} from 'react'
import btnCalendarImg from 'assets/images/btn-calendar.svg'
import {CalendarTooltip} from 'components'
import {Box, ButtonBase, Popover} from '@mui/material'
import type {EventType} from 'types'

export default function CalendarButton(props: EventType) {
    const {id} = props
    const [calendarAnchor, setCalendarAnchor] = useState<HTMLElement | null>(null)
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        setCalendarAnchor(event.currentTarget)
    }
    const handleClose = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        setCalendarAnchor(null)
    }
    const open = Boolean(calendarAnchor)
    const eventId = open ? id : undefined

    return (
        <>
            <Popover
                id={String(eventId)}
                open={open}
                anchorEl={calendarAnchor}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}>
                <CalendarTooltip {...props} />
            </Popover>
            <ButtonBase
                sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    backgroundColor: 'secondary.main',
                    '&:hover': {
                        backgroundColor: 'secondary.light',
                    },
                }}
                onClick={handleClick}>
                <Box component="img" src={btnCalendarImg} />
            </ButtonBase>
        </>
    )
}

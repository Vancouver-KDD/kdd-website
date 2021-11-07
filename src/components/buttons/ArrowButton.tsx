import React from 'react'
import leftArrorButtonImg from 'assets/images/btn-arror-left.svg'
import rightArrorButtonImg from 'assets/images/btn-arror-right.svg'
import {ButtonBase} from '@mui/material'

type PropTypes = {direction: 'left' | 'right'; onClick: React.MouseEventHandler<HTMLButtonElement>; disabled: boolean}

export default function ArrowButton({direction, onClick, disabled}: PropTypes) {
    return (
        <ButtonBase
            sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: `#E0E0E0 url(${direction === 'right' ? rightArrorButtonImg : leftArrorButtonImg}) no-repeat center`,
                '&:hover:enabled': {
                    backgroundColor: 'grey.400',
                },
                '&:disabled': {
                    opacity: '0.3',
                    pointerEvents: 'all',
                    cursor: 'not-allowed',
                },
            }}
            onClick={onClick}
            disabled={disabled}
        />
    )
}

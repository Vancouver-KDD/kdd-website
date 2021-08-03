import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import {createUseStyles} from 'react-jss'
import leftArrorButtonImg from '../assets/images/btn-arror-left.svg'
import rightArrorButtonImg from '../assets/images/btn-arror-right.svg'

export const ArrowButton = ({direction, onClick, disabled}) => {
    const classes = useStyles()

    const handlClick = () => {
        onClick?.()
    }

    return (
        <button
            className={classnames(classes[direction], disabled && classes.disabled)}
            type="button"
            onClick={handlClick}
            disabled={disabled}>
            {}
        </button>
    )
}

ArrowButton.propTypes = {
    direction: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
}

const useStyles = createUseStyles({
    left: {
        background: `url(${leftArrorButtonImg}) no-repeat`,
        backgroundPosition: 'center',
        border: 'none',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#E0E0E0',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#BDBDBD',
        },
    },
    right: {
        background: `url(${rightArrorButtonImg}) no-repeat`,
        backgroundPosition: 'center',
        border: 'none',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#E0E0E0',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#BDBDBD',
        },
    },
    disabled: {
        backgroundColor: '#F5F5F5',
        '&:hover': {
            backgroundColor: '#F5F5F5',
        },
    },
})

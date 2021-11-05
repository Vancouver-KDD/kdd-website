import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import {createUseStyles} from 'react-jss'
import leftArrorButtonImg from 'assets/images/btn-arror-left.svg'
import rightArrorButtonImg from 'assets/images/btn-arror-right.svg'

export default function ArrowButton({direction, onClick, disabled}) {
    const classes = useStyles()

    return (
        <button
            className={classnames(classes.default, classes[direction], disabled && classes.disabled)}
            type="button"
            onClick={onClick}
            disabled={disabled}
        />
    )
}

ArrowButton.propTypes = {
    direction: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
}

const useStyles = createUseStyles({
    default: {
        border: 'none',
        width: 40,
        height: 40,
        borderRadius: '50%',
        cursor: 'pointer',
        '@media (hover: hover) ': {
            '&:hover:enabled': {
                backgroundColor: '#BDBDBD',
            },
            '&:hover:disabled': {
                cursor: 'not-allowed',
            },
        },
    },
    left: {
        background: `#E0E0E0 url(${leftArrorButtonImg}) no-repeat center`,
    },
    right: {
        background: `#E0E0E0 url(${rightArrorButtonImg}) no-repeat center`,
    },
    disabled: {
        backgroundColor: '#F5F5F5',
        '&:hover': {
            backgroundColor: '#F5F5F5',
        },
    },
})

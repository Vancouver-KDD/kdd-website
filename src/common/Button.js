import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import {createUseStyles, useTheme} from 'react-jss'

export const Button = ({className, children, onClick, disabled}) => {
    const theme = useTheme()
    const classes = useStyles({theme})

    const handlClick = () => {
        onClick?.()
    }

    return (
        <button
            className={classnames('kdd-button', className, classes.default, disabled && classes.disabled)}
            type="button"
            onClick={handlClick}
            disabled={disabled}>
            {children}
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
}

const useStyles = createUseStyles((theme) => ({
    default: {
        backgroundColor: theme.colorPrimary,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '3.8rem',
        borderRadius: '10rem',
        border: 'none',
        color: 'white',
        '&:hover': {
            backgroundColor: theme.colorPrimaryHover,
        },
    },
    disabled: {
        backgroundColor: theme.colorPrimaryDisabled,
    },
}))

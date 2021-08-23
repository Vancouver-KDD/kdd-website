import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {createUseStyles, useTheme} from 'react-jss'

export const Button = ({className, to, href, newTab, Icon, text, children, onClick, disabled}) => {
    const theme = useTheme()
    const classes = useStyles({theme})

    const handlClick = () => {
        onClick?.()
    }

    let Wrapper = 'button'
    if (to) {
        Wrapper = Link
    } else if (href) {
        Wrapper = 'a'
    }

    return (
        <Wrapper
            className={classnames('kdd-button', className, classes.default, disabled && classes.disabled)}
            to={to}
            href={href}
            target={newTab ? '_blank' : undefined}
            rel={newTab ? 'noreferrer' : undefined}
            type="button"
            onClick={handlClick}
            disabled={disabled}>
            {Icon}
            {!!text && <span style={{marginLeft: Icon ? 6 : 0}}>{text}</span>}
            {children}
        </Wrapper>
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
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '2rem',
        backgroundColor: theme.colorPrimary,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '3.8rem',
        borderRadius: '10rem',
        border: 'none',
        color: 'white',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.colorPrimaryHover,
        },
    },
    disabled: {
        backgroundColor: theme.colorPrimaryDisabled,
    },
}))

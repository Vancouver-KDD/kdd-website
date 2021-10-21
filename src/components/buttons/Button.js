import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {createUseStyles} from 'react-jss'

export const Button = ({className, to, href, newTab, Icon, text, children, onClick, disabled}) => {
    const classes = useStyles({})

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
            onClick={onClick}
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

const useStyles = createUseStyles(() => ({
    default: {
        padding: 10,
        textDecoration: 'none',
        fontWeight: '600',
        // fontSize: '1.6rem',
        backgroundColor: 'hsl(343, 91%, 56%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 54,
        borderRadius: '2.5rem',
        color: 'white',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'hsl(343, 87%, 61%)',
        },
    },
    disabled: {
        backgroundColor: 'hsl(343, 100%, 80%)',
    },
}))

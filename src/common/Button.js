import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import {createUseStyles} from 'react-jss'

export const Button = (props) => {
  const classes = useStyles()
  const {className, children, onClick, disabled} = props

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
  children: PropTypes.element,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}

const useStyles = createUseStyles({
  default: {
    backgroundColor: 'hsla(343, 91%, 56%, 1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '65',
    height: '38',
    borderRadius: '1000',
    border: 'none',
    color: 'white',
    '&:hover': {
      backgroundColor: 'hsla(343, 91%, 36%, 1)',
    },
  },
  disabled: {
    backgroundColor: 'hsla(343, 91%, 90%, 1)',
    '&:hover': {
      backgroundColor: 'hsla(343, 91%, 90%, 1)',
    },
  },
})

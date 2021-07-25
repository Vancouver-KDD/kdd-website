import React from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  footer: {
    height: '10rem',
    padding: '1rem',
    'background-image': "url('images/heroBG.png')",
    'background-repeat': 'no-repeat',
    'background-position': 'center bottom',
  },
  text_developer: {
    'font-weight': 600,
    color: '#ffffff',
  },
  text_specialist: {
    'font-weight': 600,
    color: '#ffffff',
  },
  '@media screen and (max-width: 376px)': {
    footer: {
      height: 'auto',
    },
    'footer p': {
      'text-align': 'left',
    },
  },
})

function Footer() {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <p className={`${classes.text_developer} ${'h2'}`}>Developed Eric Kim ABC 123 DDD event_date</p>
      <p className={`${classes.text_specialist} ${'h2'}`}>Special thanks to PM Coordinator Mentors CCC</p>
    </footer>
  )
}

export default Footer

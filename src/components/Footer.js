import React from 'react'
import {createUseStyles, useTheme} from 'react-jss'
import heroBGMobile from '../assets/images/hero-bg-mobile.svg'

const useStyles = createUseStyles({
  footer: {
    height: 'auto',
    padding: '1rem',
    backgroundImage: `url(${heroBGMobile})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center bottom',
    '& p': {
      textAlign: 'left',
    },
  },
  text_developer: {
    fontWeight: '600',
    color: '#ffffff',
    fontSize: '2rem',
  },
  text_specialist: {
    fontWeight: '600',
    color: '#ffffff',
    fontSize: '2rem',
  },
})

function Footer(props) {
  const theme = useTheme();
  const classes = useStyles({...props, theme});
  return (
    <footer className={classes.footer}>
      <p className={classes.text_developer}>Developed Eric Kim ABC 123 DDD event_date</p>
      <p className={classes.text_specialist}>Special thanks to PM Coordinator Mentors CCC</p>
    </footer>
  )
}

export default Footer;

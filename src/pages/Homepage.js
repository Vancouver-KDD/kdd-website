import React from 'react';
import {createUseStyles, useTheme} from 'react-jss';
import {Hero} from 'components/Hero';
import Footer from 'components/Footer';
import { Link } from 'react-router-dom';
import kddLogo from 'assets/images/KDDLogo.png';
import heroBGMobile from '../assets/images/hero-bg-mobile.svg';

const useStyles = createUseStyles(theme => ({
  nav: {
    height: '100px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: '2rem',
    backgroundImage: `url(${heroBGMobile})`,
    flexDirection: 'column',
    '& a': {
      textDecoration: 'none',
      color: '#ffffff',
      fontSize: '1.5rem',
    }
  },
  nav_logo: {
    color: '#ffffff',
    backgroundColor: theme.colorPrimary,
    position: 'absolute',
    marginTop: '26rem',
    zIndex: '5',
  },
  nav_menu: {
    display: 'flex',
    '& li': {
      padding: '8px 30px',
      zIndex: 10,
      '&:hover': {
        backgroundColor: 'rgb(207, 176, 2)',
        borderRadius: '4px',
      }
    },
  }
}));

function Homepage(props) {
  const theme = useTheme();
  const classes =  useStyles({...props, theme});
  
  return (
    <div>
      <nav className={classes.nav}>
        <Link className={classes.nav_logo} to="/">
          <img src={kddLogo} alt='KDD logo' />
        </Link>
        <ul className={classes.nav_menu}>
          <li><a href="#section_statistics">About Us</a></li>
          <li><a href="#section_events">Events</a></li>
          <li><a href="#section_photos">Photos</a></li>
        </ul>
      </nav>
      <Hero />
      <Footer />
    </div>
  )
};

export default Homepage;

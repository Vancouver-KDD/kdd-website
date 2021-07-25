/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Image } from 'common/Image';
import { Button } from 'common/Button';
import { createUseStyles } from 'react-jss';
import slackLogo from '../icons/coolicon-slack.svg';

export const Hero = ({ className, img, altText }) => {
    const classes = useStyles();

    return (
        <div className={classnames('kdd-hero', className, classes.default)}>
            <div className={classes.container}>
                <h1 className={classes.title}>Join one of the best Korean communities in Vancouver</h1>
                <p className={classes.subtitle}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                </p>
                <Image img={img} alt={altText} />

                <div className={classes.btnContainer}>
                    <Button>
                        <span>UPCOMING EVENT</span>
                    </Button>
                    <Button>
                        <Image img={slackLogo} alt="slack" />
                        <span>JOIN EVENT</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

Hero.propTypes = {
    className: PropTypes.string,
    img: PropTypes.node,
    altText: PropTypes.string,
};

const useStyles = createUseStyles({
    default: {
        backgroundColor: 'hsla(349, 100%, 68%, 0.9)',
        height: 850,
        padding: '2rem',
        fontFamily: 'Nunito',
    },
    container: {},
    title: {
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        color: 'white',
        fontSize: '36px',
        fontWeight: '900',
    },
    subtitle: {
        color: 'white',
        fontSize: '18px',
        fontWeight: '700',
    },
    btnContainer: {
        fontSize: '16px',
        fontWeight: '700',
        flex: 1,

        '& .kdd-button': {
            width: '192px',
            padding: '0px 24px',
            margin: 'auto',
            marginBottom: '1em',
        },

        '& .kdd-image': {
            marginRight: '10px',
        },
    },
});

/* eslint-disable max-len */
import React from 'react'
import classnames from 'classnames'
import {Image} from 'common/Image'
import {Button} from 'common/Button'
import {createUseStyles} from 'react-jss'
import slackLogo from '../assets/icons/coolicon-slack.svg'
import heroBGMobile from '../assets/images/hero-bg-mobile.svg'

export const Hero = () => {
    const classes = useStyles()

    return (
        <div className={classnames('kdd-hero', classes.default)}>
            <div className={classes.container}>
                <h1 className={classes.title}>Join one of the best Korean communities in Vancouver</h1>
                <p className={classes.subtitle}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                </p>

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
    )
}

const useStyles = createUseStyles({
    default: {
        backgroundColor: 'hsla(349, 100%, 68%, 0.9)',
        height: 850,
        padding: '2rem',
        background: `url(${heroBGMobile}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        textAlign: 'center',
    },
    container: {},
    title: {
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        color: 'white',
        fontWeight: '900',
        fontSize: '3.6rem',
        marginBottom: '4rem',
    },
    subtitle: {
        color: 'white',
        fontSize: '1.8rem',
        fontWeight: '700',
        marginBottom: '4rem',
    },
    btnContainer: {
        '& .kdd-button': {
            fontWeight: '700',
            width: '19.2rem',
            fontSize: '1.6rem',
            padding: '1.6rem 2.4rem',
            margin: 'auto',
            marginBottom: '2.4rem',
        },

        '& .kdd-image': {
            marginRight: '1rem',
        },
    },
})

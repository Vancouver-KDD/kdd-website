import React from 'react'
import classnames from 'classnames'
import {Image} from 'common/Image'
import {Button} from 'common/Button'
import {createUseStyles} from 'react-jss'
import slackLogo from 'assets/icons/coolicon-slack.svg'
import heroBGMobile from 'assets/images/hero-bg-mobile.svg'
import ellipse from 'assets/images/ellipse.svg'

export default function Hero() {
    const classes = useStyles()

    return (
        <div style={{positoin: 'relative'}}>
            <div className={classnames('kdd-hero', classes.default)}>
                <div className={classes.container}>
                    <h1 className={classes.title}>Vancouver KDD</h1>
                    <p className={classes.subtitle}>
                        저희는 밴쿠버 한인 개발자 디자이너로 이루어져 있으며 네트워킹 및 한인 사회에 기여를 추구하는 모임 입니다.
                    </p>

                    <div className={classes.btnContainer}>
                        <Button>
                            <Image img={slackLogo} alt="join slack" />
                            <span>JOIN SLACK</span>
                        </Button>
                    </div>
                </div>
            </div>
            <img className={classes.divider} src={ellipse} alt="ellipse divider" />
        </div>
    )
}

const useStyles = createUseStyles({
    divider: {
        width: '100%',
        position: 'absolute',
        bottom: -1,
    },
    default: {
        backgroundColor: 'hsla(349, 100%, 68%, 0.9)',
        padding: '5rem',
        background: `url(${heroBGMobile}) no-repeat center center`,
        backgroundSize: 'cover',
        textAlign: 'center',
    },
    container: {
        padding: 100,
        height: 'calc(100vh - 100px)',
    },
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

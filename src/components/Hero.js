import React from 'react'
import classnames from 'classnames'
import {Image} from 'common/Image'
import {Button} from 'common/Button'
import {createUseStyles} from 'react-jss'
import slackLogo from 'assets/icons/coolicon-slack.svg'
import linkedInIcon from 'assets/icons/LinkedIn.svg'
import heroBG from 'assets/images/hero-bg.jpg'
import ellipse from 'assets/images/ellipse.svg'

export default function Hero() {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div className={classnames('kdd-hero', classes.default)}>
                <div className={classes.contentContainer}>
                    <h1 className={classes.title}>Vancouver KDD</h1>
                    <p className={classes.subtitle}>
                        저희는 밴쿠버 한인 개발자 디자이너로 이루어져 있으며 네트워킹 및 한인 사회에 기여를 추구하는 모임 입니다.
                    </p>

                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div className={classes.btnContainer}>
                            <Button
                                href="https://www.linkedin.com/company/vancouver-kdd"
                                target="_blank"
                                Icon={<Image img={linkedInIcon} alt="LinkedIn" />}
                                text="LinkedIn"
                            />
                        </div>
                        <div className={classes.btnContainer}>
                            <Button
                                href="https://join.slack.com/t/vancouverkdd/shared_invite/zt-smt20gzk-OBnpJFijGnVKaT80RdgD9g"
                                target="_blank"
                                Icon={<Image img={slackLogo} alt="Join Slack" />}
                                text="Join Slack"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <img className={classes.divider} src={ellipse} alt="ellipse divider" />
        </div>
    )
}

const useStyles = createUseStyles({
    container: {
        height: '100vh',
        minHeight: 550,
        position: 'relative',
    },
    divider: {
        width: '100%',
        position: 'absolute',
        bottom: -1,
    },
    default: {
        background: `url(${heroBG}) no-repeat center center`,
        backgroundSize: 'cover',
        height: '100%',
    },
    contentContainer: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
        paddingTop: 110,
        justifyContent: 'center',
        height: '100%',
    },
    title: {
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        color: 'white',
        fontWeight: '900',
        fontSize: '3.6rem',
        marginBottom: '3rem',
    },
    subtitle: {
        color: 'white',
        fontSize: '1.8rem',
        fontWeight: '700',
        marginBottom: '3rem',
    },
    btnContainer: {
        marginLeft: 5,
        marginRight: 5,
        width: 130,
        display: 'flex',
        flexDirection: 'column',
    },
})

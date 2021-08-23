import React from 'react'
import {createUseStyles, useTheme} from 'react-jss'
import {Image} from 'common/Image'
import SlackIcon from 'assets/icons/coolicon-slack-purple.png'
import FaceBookIcon from 'assets/icons/coolicon-fb.png'
import MeetupIcon from 'assets/icons/coolicon-meetup.png'
import LinkedinIcon from 'assets/icons/coolicon-linkedin.png'

function Contact() {
    const theme = useTheme()
    const classes = useStyles({ theme })
    return (
        <section className={classes.default}>
            <h1 className={classes.title}>Contact Us</h1>
            <div className={classes.content}>
                <div>
                    <h2>Email</h2>
                    <a
                        className={classes.email}
                        href="mailto:vancouverkdd@gmail.com">
                        vancouverkdd@gmail.com
                    </a>
                </div>
                <div>
                    <h2>Social Media</h2>
                    <div className={classes.icons}>
                        <Image
                            img={SlackIcon}
                            alt="slack icon"
                            url="https://join.slack.com/t/vancouverkdd/shared_invite/zt-smt20gzk-OBnpJFijGnVKaT80RdgD9g" />
                        <Image
                            img={LinkedinIcon} alt="linkedin icon"
                            url="https://www.linkedin.com/company/vancouver-kdd" />
                        <Image
                            img={FaceBookIcon} alt="facebook icon"
                            url="https://www.facebook.com/groups/VancouverKDD" />
                        <Image
                            img={MeetupIcon}
                            alt="meetup icon"
                            url="https://www.meetup.com/Vancouver-KDD" />
                    </div>
                </div>
            </div>
        </section>
    )
}

const useStyles = createUseStyles (() => ({
    default: {
        margin: 'auto',
        position: 'relative',
        textAlign: 'center',
    },
    title: {
        fontSize: '3.6rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: "4rem",
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '3.6rem',
        fontWeight: '900',
        "& > div": {
            marginBottom: '4rem',
            margin: 'auto'
        },
        "@media (max-width: 375px)": {
            flexDirection: 'column',
        }
    },
    email: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 73,
        fontSize: '2.4rem',
        color: '#0E0E2C',
    },
    icons: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "& img": {
            width: 50,
            height: 50,
            margin: 10
        }
    }
}))

export default Contact
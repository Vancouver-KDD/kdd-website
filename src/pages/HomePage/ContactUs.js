import React from 'react'
import {createUseStyles} from 'react-jss'
import {Image} from 'components/Image'
import SlackIcon from 'assets/icons/slack.svg'
import FaceBookIcon from 'assets/icons/facebook.svg'
import MeetupIcon from 'assets/icons/meetup1.svg'
import LinkedinIcon from 'assets/icons/linkedIn1.svg'

export default function ContactUs() {
    const classes = useStyles()
    return (
        <section className={classes.default}>
            <h3 className={classes.title}>Contact Us</h3>
            <div className={classes.content}>
                <div className={classes.contactSection}>
                    <h4>Email</h4>
                    <a className={classes.email} href="mailto:vancouverkdd@gmail.com">
                        vancouverkdd@gmail.com
                    </a>
                </div>
                <div className={classes.contactSection}>
                    <h4>Social Media</h4>
                    <div className={classes.icons}>
                        <Image
                            img={SlackIcon}
                            alt="slack icon"
                            url="https://join.slack.com/t/vancouverkdd/shared_invite/zt-smt20gzk-OBnpJFijGnVKaT80RdgD9g"
                        />
                        <Image img={LinkedinIcon} alt="linkedin icon" url="https://www.linkedin.com/company/vancouver-kdd" />
                        <Image img={FaceBookIcon} alt="facebook icon" url="https://www.facebook.com/groups/VancouverKDD" />
                        <Image img={MeetupIcon} alt="meetup icon" url="https://www.meetup.com/Vancouver-KDD" />
                    </div>
                </div>
            </div>
        </section>
    )
}

const useStyles = createUseStyles({
    contactSection: {width: 375, maxWidth: '100%'},
    contactSNSIcon: {
        width: 50,
        height: 50,
    },
    default: {
        margin: 'auto',
        position: 'relative',
        textAlign: 'left',
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '4rem',
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: '3.6rem',
        fontWeight: '900',
        flexWrap: 'wrap',
        '& > div': {
            marginBottom: '4rem',
            margin: 'auto',
        },
        '@media (max-width: 375px)': {
            flexDirection: 'column',
        },
    },
    email: {
        display: 'flex',
        alignItems: 'center',
        height: 73,
        // fontSize: '2.4rem',
        color: '#0E0E2C',
    },
    icons: {
        height: 73,
        display: 'flex',
        '& img': {
            width: 50,
            height: 50,
            marginTop: 10,
            marginRight: 10,
        },
    },
})

import React from 'react'
import {createUseStyles} from 'react-jss'
import {Image} from 'components/Image'
import SlackIcon from 'assets/icons/slack.svg'
import FaceBookIcon from 'assets/icons/facebook.svg'
import MeetupIcon from 'assets/icons/meetup1.svg'
import LinkedinIcon from 'assets/icons/linkedIn1.svg'
import {Typography, Box} from '@mui/material'

export default function ContactUs() {
    const classes = useStyles()
    return (
        <Box
            component="section"
            sx={{
                margin: 'auto',
                position: 'relative',
                textAlign: 'left',
            }}>
            <Typography
                variant="h4"
                mt={4}
                mb={4}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: 700,
                }}>
                Contact Us
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
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
                }}>
                <Box width={375} maxWidth="100%">
                    <Typography variant="h4" fontWeight={700}>
                        Email
                    </Typography>
                    <a className={classes.email} href="mailto:vancouverkdd@gmail.com">
                        vancouverkdd@gmail.com
                    </a>
                </Box>
                <Box width={375} maxWidth="100%">
                    <Typography variant="h4" fontWeight={700}>
                        Social Media
                    </Typography>
                    <Box
                        sx={{
                            height: 73,
                            display: 'flex',
                            flexDirection: 'row',
                            '& img': {
                                width: 50,
                                height: 50,
                                marginTop: 2,
                                marginRight: 2,
                            },
                        }}>
                        <Image
                            img={SlackIcon}
                            alt="slack icon"
                            url="https://join.slack.com/t/vancouverkdd/shared_invite/zt-smt20gzk-OBnpJFijGnVKaT80RdgD9g"
                        />
                        <Image img={LinkedinIcon} alt="linkedin icon" url="https://www.linkedin.com/company/vancouver-kdd" />
                        <Image img={FaceBookIcon} alt="facebook icon" url="https://www.facebook.com/groups/VancouverKDD" />
                        <Image img={MeetupIcon} alt="meetup icon" url="https://www.meetup.com/Vancouver-KDD" />
                    </Box>
                </Box>
            </Box>
        </Box>
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

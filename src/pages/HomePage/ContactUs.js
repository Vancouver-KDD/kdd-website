import React from 'react'
import {createUseStyles} from 'react-jss'
import {Image, Section} from 'components'
import SlackIcon from 'assets/icons/slack.svg'
import FaceBookIcon from 'assets/icons/facebook.svg'
import MeetupIcon from 'assets/icons/meetup1.svg'
import LinkedinIcon from 'assets/icons/linkedIn1.svg'
import {Typography, Stack} from '@mui/material'

export default function ContactUs() {
    const classes = useStyles()
    return (
        <Section>
            <Typography
                variant="h4"
                my={4}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: 700,
                }}>
                Contact Us
            </Typography>
            <Stack
                direction={{xs: 'column', sm: 'row'}}
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Stack flex={1}>
                    <Typography variant="h4" fontWeight={700}>
                        Email
                    </Typography>

                    <a className={classes.email} href="mailto:vancouverkdd@gmail.com">
                        vancouverkdd@gmail.com
                    </a>
                </Stack>
                <Stack flex={1}>
                    <Typography variant="h4" fontWeight={700}>
                        Social Media
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                            '& img': {
                                width: 50,
                                height: 50,
                                mt: 2,
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
                    </Stack>
                </Stack>
            </Stack>
        </Section>
    )
}

const useStyles = createUseStyles({
    email: {
        display: 'flex',
        alignItems: 'center',
        height: 73,
        // fontSize: '2.4rem',
        color: '#0E0E2C',
    },
})

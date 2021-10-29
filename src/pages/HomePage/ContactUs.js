import React from 'react'
import {Image, Section} from 'components'
import SlackIcon from 'assets/icons/slack.svg'
import FaceBookIcon from 'assets/icons/facebook.svg'
import MeetupIcon from 'assets/icons/meetup1.svg'
import LinkedinIcon from 'assets/icons/linkedIn1.svg'
import {Link, Typography, Stack} from '@mui/material'

export default function ContactUs() {
    return (
        <Section>
            <Typography variant="h4" my={4} textAlign="center" fontWeight="700">
                Contact Us
            </Typography>
            <Stack direction={{xs: 'column', sm: 'row'}} spacing={4}>
                <Stack flex={1} spacing={3}>
                    <Typography variant="h5" fontWeight={700}>
                        Email
                    </Typography>
                    <Link color={'text.primary'} href="mailto:vancouverkdd@gmail.com" variant="h6">
                        vancouverkdd@gmail.com
                    </Link>
                </Stack>
                <Stack flex={1} spacing={2}>
                    <Typography variant="h5" fontWeight={700}>
                        Social Media
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                            '& img': {
                                width: 50,
                                height: 50,
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

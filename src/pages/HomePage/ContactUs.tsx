import React from 'react'
import {Section} from 'components'
import SlackIcon from 'assets/icons/slack.svg'
import FaceBookIcon from 'assets/icons/facebook.svg'
import MeetupIcon from 'assets/icons/meetup1.svg'
import LinkedinIcon from 'assets/icons/linkedIn1.svg'
import {IconButton, Box, Link, Typography, Stack} from '@mui/material'

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
                <Stack flex={1}>
                    <Typography variant="h5" fontWeight={700}>
                        Social Media
                    </Typography>
                    <Stack direction="row">
                        <IconButton
                            target="_blank"
                            rel="noreferrer"
                            aria-label="slack icon"
                            href="https://join.slack.com/t/vancouverkdd/shared_invite/zt-smt20gzk-OBnpJFijGnVKaT80RdgD9g">
                            <Box width={50} height={50} component="img" src={SlackIcon} />
                        </IconButton>
                        <IconButton
                            target="_blank"
                            rel="noreferrer"
                            aria-label="linkedin icon"
                            href="https://www.linkedin.com/company/vancouver-kdd">
                            <Box width={50} height={50} component="img" src={LinkedinIcon} />
                        </IconButton>
                        <IconButton
                            target="_blank"
                            rel="noreferrer"
                            aria-label="facebook icon"
                            href="https://www.facebook.com/groups/VancouverKDD">
                            <Box width={50} height={50} component="img" src={FaceBookIcon} />
                        </IconButton>
                        <IconButton
                            target="_blank"
                            rel="noreferrer"
                            aria-label="meetup icon"
                            href="https://www.meetup.com/Vancouver-KDD">
                            <Box width={50} height={50} component="img" src={MeetupIcon} />
                        </IconButton>
                    </Stack>
                </Stack>
            </Stack>
        </Section>
    )
}

import slackLogo from 'assets/icons/coolicon-slack.svg'
import linkedInIcon from 'assets/icons/LinkedIn.svg'
import heroBG from 'assets/images/hero-bg.jpg'
import ellipse from 'assets/images/ellipse.svg'
import {Button, Box, Typography, Stack} from '@mui/material'

export default function Hero() {
    console.log(heroBG)
    return (
        <Stack height="100vh" minHeight={68} position="relative">
            <Stack
                sx={{
                    background: `url(${heroBG}) no-repeat center center`,
                    backgroundSize: 'cover',
                    height: '100%',
                }}>
                <Stack spacing={'2rem'} textAlign="center" p={2} pt={14} justifyContent="center" height="100%">
                    <Typography
                        variant="h3"
                        sx={{
                            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                            color: 'primary.contrastText',
                            fontWeight: '900',
                        }}>
                        Vancouver KDD
                    </Typography>

                    <Typography variant="h6" color="primary.contrastText" fontWeight="700">
                        저희는 밴쿠버 한인 개발자 디자이너로 이루어져 있으며 네트워킹 및 한인 사회에 기여를 추구하는 모임 입니다.
                    </Typography>

                    <Stack justifyContent="center" direction="row" mx={1} spacing={2}>
                        <Button
                            href="https://www.linkedin.com/company/vancouver-kdd"
                            variant="contained"
                            disableElevation
                            size="large"
                            target="_blank"
                            rel="noreferrer"
                            startIcon={<Box component="img" src={linkedInIcon} alt="LinkedIn" />}>
                            LinkedIn
                        </Button>
                        <Button
                            href="https://join.slack.com/t/vancouverkdd/shared_invite/zt-smt20gzk-OBnpJFijGnVKaT80RdgD9g"
                            variant="contained"
                            disableElevation
                            size="large"
                            target="_blank"
                            rel="noreferrer"
                            startIcon={<Box component="img" src={slackLogo} alt="Join Slack" />}>
                            Join Slack
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
            <Box component={'img'} width="100%" position="absolute" bottom={'-1px'} src={ellipse} alt="ellipse divider" />
        </Stack>
    )
}

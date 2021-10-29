import {Image} from 'components/Image'
import {Button} from 'components/buttons/Button'
import slackLogo from 'assets/icons/coolicon-slack.svg'
import linkedInIcon from 'assets/icons/LinkedIn.svg'
import heroBG from 'assets/images/hero-bg.jpg'
import ellipse from 'assets/images/ellipse.svg'
import {Typography, Box} from '@mui/material'

export default function Hero() {
    return (
        <Box height="100vh" minHeight={68} position="relative">
            <Box
                sx={{
                    background: `url(${heroBG}) no-repeat center center`,
                    backgroundSize: 'cover',
                    height: '100%',
                }}>
                <Box textAlign="center" p={2} pt={14} justifyContent="center" height="100%">
                    <Typography
                        variant="h3"
                        sx={{
                            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                            color: 'primary.contrastText',
                            fontWeight: '900',
                            mb: '2rem',
                        }}>
                        Vancouver KDD
                    </Typography>

                    <Typography variant="h6" color="primary.contrastText" fontWeight="700" mb={'2rem'}>
                        저희는 밴쿠버 한인 개발자 디자이너로 이루어져 있으며 네트워킹 및 한인 사회에 기여를 추구하는 모임 입니다.
                    </Typography>

                    <Box justifyContent="center" flexDirection="row" mx={1} gap={2}>
                        <Button
                            href="https://www.linkedin.com/company/vancouver-kdd"
                            newTab
                            Icon={<Image img={linkedInIcon} alt="LinkedIn" />}
                            text="LinkedIn"
                        />
                        <Button
                            href="https://join.slack.com/t/vancouverkdd/shared_invite/zt-smt20gzk-OBnpJFijGnVKaT80RdgD9g"
                            newTab
                            Icon={<Image img={slackLogo} alt="Join Slack" />}
                            text="Join Slack"
                        />
                    </Box>
                </Box>
            </Box>
            <Box component={'img'} width="100%" position="absolute" bottom={'-1px'} src={ellipse} alt="ellipse divider" />
        </Box>
    )
}

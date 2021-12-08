import React from 'react'
import {Footer, NavigationBar, Section} from 'components'
import about0 from 'assets/images/about-us-0.jpg'
import about1 from 'assets/images/about-us-1.jpg'
import {useCollection} from 'store'
import * as socialIcons from 'assets/socialIcons'
import {Box, Grid, Stack, Typography} from '@mui/material'
import type {OrganizerType} from 'types'

export default function AboutUsPage() {
    const {data} = useCollection({name: 'organizers'})

    return (
        <Stack>
            <NavigationBar />
            <Section my={6} spacing={4}>
                <Typography variant="h4" fontWeight="700">
                    Korean Developer & Designer
                </Typography>
                <Typography variant="body1">
                    KDD는 Korean Developer and Designer 그룹으로 캐나다 서부지역 IT분야 한인들의 비영리 모임입니다. KDD는 2017년 부터
                    한인 IT분야 종사자들의 교류와 지역사회 발전을 위해 노력하고 있습니다.
                </Typography>
            </Section>

            <img src={about0} width="100%" height="auto" alt={'aboutUsFirstimg'} />
            <Section my={6} spacing={4}>
                <Typography variant="h4" fontWeight="700">
                    About Us
                </Typography>
                <Typography variant="body1">
                    KDD는 밴쿠버지역의 IT에 종사하는 한인들이 모여 교류할 수 있는 모임으로 2017년 7월에 처음으로 모임을 시작했습니다.
                    현재 KDD는 광역 밴쿠버 뿐만 아니라 빅토리아, 캘거리, 토론토 등 다양한 지역의 회원들도 모임에 참여하여 총 회원이
                    1000명 이상이며, 매달 30여분의 신규 회원이 가입하고 있습니다. 매월 정기 온라인 모임을 개최하여 한인들간의 친목과
                    교류를 도모하고 있습니다. 지난 4년년간 KDD는 IT세미나, 워크샵, 커리어코칭, 멘토링 등 38회의 다양한 이벤트를
                    개최해왔고, 많은 분들이 KDD를 통해 직장을 구하고, 캐나다 정착에 성공하였습니다. 또한 KDD는 한인 소상공인과의 협력을
                    통한 주니어 개발자, 디자이너들의 성장을 도모하는 스텝업 프로그램을 시작하여 지역사회에 도움이 되는 모임으로
                    성장하고 있습니다
                </Typography>
            </Section>
            <Stack sx={{backgroundColor: 'grey.200'}}>
                <Section my={6} spacing={4}>
                    <Typography variant="h4" fontWeight="700">
                        KDD Mission
                    </Typography>
                    <Typography variant="body1">
                        KDD는 한인 IT인들의 기술적, 사교적 교류를 도모합니다.
                        <br />
                        KDD는 한인 IT인들의 구직, 구인과 경력개발을 돕습니다.
                        <br />
                        KDD는 한인 IT인들의 안전한 캐나다 정착을 돕습니다.
                    </Typography>
                </Section>
            </Stack>
            <Section direction="row" spacing={'6%'} my={6} alignItems="center">
                <Stack spacing={2}>
                    <Typography variant="h4" fontWeight="700" mb={2}>
                        Message From Members
                    </Typography>
                    <Typography variant="body1">
                        “KDD 회원분의 리퍼럴 덕분에 풀타임 취업에 성공했습니다. 4개월간 취업을 못해 고생했는데 KDD를 진작 알았다면 하는
                        아쉬움이 드네요.”
                    </Typography>
                    <Typography variant="body1">
                        “어디로 거주지를 정할지 고민이었는데 모임에서 들은 팁을 바탕으로 살 곳을 정하게 됐어요.” “밴쿠버에서 또래
                        친구를 만나게 돼서 더 좋았어요”
                    </Typography>
                    <Typography variant="body1">
                        “졸업후 잡을 찾지 못해서 고생했는데 KDD회원분이 사내 채용정보를 알려주셔서 취업하게 됐습니다. 네트워킹이 정말
                        중요한것 같아요.”
                    </Typography>
                </Stack>
                <Box component="img" src={about1} sx={{objectFit: 'cover'}} width="40%" height={400} alt={'hand holding lightbulb'} />
            </Section>
            <Stack sx={{backgroundColor: 'grey.200'}}>
                <Section my={6} spacing={4}>
                    <Typography variant="h4" fontWeight="700">
                        Wanted
                    </Typography>
                    <Typography variant="body1">
                        KDD의 모든 행사는 자원봉사 및 재능기부로 이루어지고 있습니다. 멘토링, 세미나등 모임에 도움을 주고자 하는 분들은
                        언제든 vancouverkdd@gmail.com 로 연락주세요.
                    </Typography>
                </Section>
            </Stack>
            <Section textAlign="center" my={6} gap={4}>
                <Typography variant="h4" fontWeight="700">
                    Organizers
                </Typography>
                <Grid container spacing={2}>
                    {data?.map?.((organizer) => {
                        return (
                            <Grid item key={organizer.id} xs={12} sm={6} md={4}>
                                <Organizer {...organizer} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Section>
            <Footer />
        </Stack>
    )
}

const Organizer = ({name, title, description, profilePic, socialList}: OrganizerType) => {
    const imageUrl = profilePic?.formats?.small?.url ?? profilePic?.url

    return (
        <Stack spacing={1}>
            <Box
                component={'img'}
                sx={{
                    width: '100%',
                    borderRadius: 1,
                    objectFit: 'cover',
                    aspectRatio: '1',
                }}
                src={imageUrl}
                alt={name}
            />
            <Typography variant="h5" fontWeight="700">
                {name}
            </Typography>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="h6">{description}</Typography>
            <Stack
                sx={{
                    mt: 1,
                    width: '100%',
                    display: 'grid',
                    justifyContent: 'center', // Centres Horizontally
                    gridTemplateColumns: 'repeat(auto-fit, 60px)', // Causes SocialLinks to wrap when overflows
                    gap: 1,
                }}>
                {socialList?.map?.((sns, index) => (
                    <a key={index} href={sns.link} target="_blank" rel="noreferrer">
                        <img src={socialIcons?.[sns.type] ?? socialIcons.other} alt={sns.type} />
                    </a>
                ))}
            </Stack>
        </Stack>
    )
}

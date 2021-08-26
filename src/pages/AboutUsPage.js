import React from 'react'
import {createUseStyles} from 'react-jss'
import NavigationBar from 'components/NavigationBar'
import Footer from 'components/Footer'
import about0 from 'assets/images/about-us-0.jpg'
import about1 from 'assets/images/about-us-1.jpg'
import {useCollection} from 'store'
import * as memberSocialIcons from 'assets/members'

export default function AboutUsPage() {
    const classes = useStyles()
    const {data} = useCollection({name: 'volunteers'})

    return (
        <div className={classes.root}>
            <NavigationBar />
            <div className={classes.title}>Korean Developer & Designer</div>
            <div className={classes.contents}>
                KDD는 Korean Developer and Designer 그룹으로 캐나다 서부지역 IT분야 한인들의 비영리 모임입니다. KDD는 2017년 부터 한인
                IT분야 종사자들의 교류와 지역사회 발전을 위해 노력하고 있습니다.
            </div>
            <img src={about0} width="100%" height="auto" alt={'aboutUsFirstimg'} />
            <div className={classes.titleRight}>About Us</div>
            <div className={classes.contentsRight}>
                KDD는 밴쿠버지역의 IT에 종사하는 한인들이 모여 교류할 수 있는 모임으로 2017년 7월에 처음으로 모임을 시작했습니다. 현재
                KDD는 광역 밴쿠버 뿐만 아니라 빅토리아, 캘거리, 토론토 등 다양한 지역의 회원들도 모임에 참여하여 총 회원이 1000명
                이상이며, 매달 30여분의 신규 회원이 가입하고 있습니다. 매월 정기 온라인 모임을 개최하여 한인들간의 친목과 교류를
                도모하고 있습니다. 지난 4년년간 KDD는 IT세미나, 워크샵, 커리어코칭, 멘토링 등 38회의 다양한 이벤트를 개최해왔고, 많은
                분들이 KDD를 통해 직장을 구하고, 캐나다 정착에 성공하였습니다. 또한 KDD는 한인 소상공인과의 협력을 통한 주니어 개발자,
                디자이너들의 성장을 도모하는 스텝업 프로그램을 시작하여 지역사회에 도움이 되는 모임으로 성장하고 있습니다
            </div>
            <div style={{height: 'auto', backgroundColor: '#EAEAEA'}}>
                <h1 style={{paddingTop: '2rem'}} className={classes.title}>
                    KDD Mission
                </h1>
                <h2 style={{paddingBottom: '2rem'}} className={classes.contents}>
                    KDD는 한인 IT인들의 기술적, 사교적 교류를 도모합니다.{'\n'}
                    KDD는 한인 IT인들의 구직, 구인과 경력개발을 돕습니다.{'\n'}
                    KDD는 한인 IT인들의 안전한 캐나다 정착을 돕습니다.
                </h2>
            </div>
            <div className={classes.msgContainer}>
                <div>
                    <h1 className={classes.title}>Message From Members</h1>
                    <h2 className={classes.contents}>
                        “KDD 회원분의 리퍼럴 덕분에 풀타임 취업에 성공했습니다. 4개월간 취업을 못해 고생했는데 KDD를 진작 알았다면 하는
                        아쉬움이 드네요.”
                        {'\n'}
                        {'\n'}“어디로 거주지를 정할지 고민이었는데 모임에서 들은 팁을 바탕으로 살 곳을 정하게 됐어요.”
                        {'\n'}
                        {'\n'}“밴쿠버에서 또래 친구를 만나게 돼서 더 좋았어요”
                        {'\n'}
                        {'\n'}“졸업후 잡을 찾지 못해서 고생했는데 KDD회원분이 사내 채용정보를 알려주셔서 취업하게 됐습니다. 네트워킹이
                        정말 중요한것 같아요.”
                    </h2>
                </div>
                <img src={about1} className={classes.bulb} alt={'aboutUsSecondimg'} />
            </div>
            <div style={{padding: '2rem', marginTop: '2rem', backgroundColor: '#EAEAEA', textAlign: 'center'}}>
                <h1 style={{padding: 0, margin: 5}} className={classes.title}>
                    Wanted
                </h1>
                <div style={{padding: 5, margin: 5}} className={classes.contents}>
                    KDD의 모든 행사는 자원봉사 및 재능기부로 이루어지고 있습니다. 멘토링, 세미나등 모임에 도움을 주고자 하는 분들은
                    언제든 vancouverkdd@gmail.com 로 연락주세요.
                </div>
            </div>
            <Section>
                <h1>Organizers</h1>
                <div className={classes.membersContainer}>
                    {data?.map((member) => {
                        return <Member key={member.id} {...member} />
                    })}
                </div>
            </Section>
            <Footer />
        </div>
    )
}

const Section = ({children}) => {
    const classes = useStyles()

    return (
        <div className={classes.section}>
            <div className={classes.sectionContent}>{children}</div>
        </div>
    )
}

const Member = ({name, title, description, profilePic, socialList}) => {
    const classes = useStyles()
    const imageUrl = profilePic?.[0]?.formats?.small?.url ?? profilePic?.[0]?.url

    return (
        <div className={classes.member}>
            <img className={classes.memberImage} src={imageUrl} alt="" />
            <h5>{name}</h5>
            <p>{title}</p>
            <p>{description}</p>
            <div className={classes.socialContainer}>
                {socialList?.map((sns) => (
                    <img key={sns.id} src={memberSocialIcons[sns.type] ?? memberSocialIcons.link} alt={sns.type} />
                ))}
            </div>
        </div>
    )
}

const useStyles = createUseStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    section: {
        // Centers the sectionContent
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        // Prevents the sectionContent from hitting the sides of the window
        paddingLeft: 20,
        paddingRight: 20,
    },
    sectionContent: {
        // Increase the width up to 1024 or 100%
        width: 1024,
        maxWidth: '100%',
        paddingTop: 'calc(4.8828125% + 25px)', // 25px - 75px based on the width
        paddingBottom: 'calc(4.8828125% + 25px)', // 25px - 75px based on the width
        textAlign: 'center',
    },
    membersContainer: {
        marginTop: 'calc(2.44140625% + 25px)', // 25px - 50px based on the width
        display: 'grid',
        gridTemplateColumns: '1fr',
        columnGap: 20,
        rowGap: 40,
        '@media (min-width: 375px)': {
            gridTemplateColumns: '1fr 1fr',
        },
        '@media (min-width: 768px)': {
            gridTemplateColumns: '1fr 1fr 1fr',
        },
    },
    member: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: '3rem',
        fontWeight: '600',
        '& > h5': {
            padding: 10,
        },
        '& > p': {
            paddingBottom: 5,
        },
    },
    memberImage: {
        width: '100%',
        borderRadius: 8,
        objectFit: 'cover',
    },
    socialContainer: {
        marginTop: 5,
        width: '100%',
        display: 'grid',
        justifyContent: 'center', // Centres Horizontally
        gridTemplateColumns: 'repeat(auto-fit, 60px)', // Causes SocialLinks to wrap when overflows
        gap: 10,
    },
    title: {
        fontSize: '2rem',
        fontWeight: '700',
        marginTop: '3rem',
        marginBottom: '1.5rem',
        marginLeft: '10%',
        whiteSpace: 'pre-wrap',
        '@media (min-width: 1024px)': {
            whiteSpace: 'pre-wrap',
            marginLeft: '15%',
            marginBottom: '3rem',
            fontSize: '4rem',
        },
    },
    contents: {
        fontSize: '1.2rem',
        fontWeight: '500',
        marginBottom: '2.5rem',
        marginLeft: '10%',
        paddingRight: '15%',
        whiteSpace: 'pre-wrap',
        '@media (min-width: 800px)': {
            paddingRight: '5%',
        },
        '@media (min-width: 1024px)': {
            marginLeft: '15%',
            marginBottom: '6rem',
            fontSize: '1.5rem',
            paddingRight: '35%',
            whiteSpace: 'pre-wrap',
        },
    },
    titleRight: {
        fontSize: '2rem',
        fontWeight: '700',
        marginTop: '3rem',
        marginBottom: '1.5rem',
        marginLeft: '10%',
        display: 'flex',
        '@media (min-width: 1024px)': {
            marginLeft: '35%',
            marginBottom: '3rem',
            fontSize: '4rem',
        },
    },
    contentsRight: {
        fontSize: '1.2rem',
        fontWeight: '500',
        marginTop: '2rem',
        marginBottom: '2.5rem',
        marginLeft: '10%',
        paddingRight: '15%',
        whiteSpace: 'pre-wrap',
        display: 'flex',
        '@media (min-width: 1024px)': {
            marginLeft: '35%',
            marginBottom: '6rem',
            fontSize: '1.5rem',
            paddingRight: '20%',
            whiteSpace: 'pre-wrap',
        },
    },
    bulb: {
        objectFit: 'cover',
        marginTop: '3rem',
        align: 'center',
        width: '100%',
        height: '200px',
        overflow: 'hidden',
        '@media (min-width: 800px)': {
            width: '0rem',
            height: '10px',
            align: 'center',
            overflow: 'hidden',
        },
        '@media (min-width: 1024px)': {
            width: '40rem',
            height: '100%',
            marginLeft: '-5rem',
            marginBottom: '3rem',
            fontSize: '4rem',
        },
    },
    msgContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        '@media (min-width: 800px)': {
            marginLeft: '2%',
            fontSize: '10rem',
        },
        '@media (min-width: 1024px)': {
            whiteSpace: 'pre-wrap',
            marginLeft: '8%',
            marginBottom: '3rem',
            fontSize: '4rem',
        },
    },
})

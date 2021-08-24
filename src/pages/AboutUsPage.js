import React from 'react'
import {createUseStyles} from 'react-jss'
import NavigationBar from 'components/NavigationBar'
import Footer from 'components/Footer'
import aboutUsNetworking from 'assets/icons/aboutUsNetworking.svg'
import aboutUsCareer from 'assets/icons/aboutUsCareer.svg'
import aboutUsSoftLanding from 'assets/icons/aboutUsSoftLanding.svg'
import {Button} from 'common/Button'
import slackLogo from 'assets/icons/coolicon-slack.svg'
import {Image} from 'common/Image'
import ProfileCards from 'components/ProfileCards'


export default function AboutUsPage() {
    const classes = useStyles()

    return (
        <div>
            <NavigationBar />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 80, marginTop: -20}}>
                <h1 className={classes.titleBlack}><h1 className={classes.titleColor}>KDD's</h1> Mission</h1>
                <div style={{display: 'flex', width: 1024, maxWidth: '100%', justifyContent: 'space-between'}}>
                    <Mission
                        Image={<img src={aboutUsNetworking} alt={''} />}
                        title="Networking"
                        description={'BBQ Party\nMonthly Meetup\nStudy Group\nand many more...'}
                    />
                    <Mission
                        Image={<img src={aboutUsCareer} alt={''} />}
                        title="Career"
                        description={'Referral\nInternal Job Posting\nResume Review\nWorkshop'}
                    />
                    <Mission
                        Image={<img src={aboutUsSoftLanding} alt={''} />}
                        title="Soft Landing"
                        description={'Share Housing\nFinancial Tips\nLearn Canadian Culture'}
                    />
                </div>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',backgroundColor:'#EAEAEA'}}>
                <h1 className={classes.titleBlack}>Started in 2017</h1>
                <div style={{display: 'flex', width: 900, height:100, maxWidth: '100%', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10}}>
                    <h5 className={classes.missionDescription}>
                    KDD is for developers and designers who are interested in networking and sharing ideas with like-minded people. 
                    {'\n'}We organize events that provide opportunities to make friends, learn new things, and improve your skills. 
                    {'\n'}Events will include technical talks, 
                    socials, and workshops.
                    </h5>
                </div>
                <div className={classes.btnContainer}>
                    <Button
                        href="https://join.slack.com/t/vancouverkdd/shared_invite/zt-smt20gzk-OBnpJFijGnVKaT80RdgD9g"
                        newTab
                        Icon={<Image img={slackLogo} alt="Join Slack" />}
                        text="Join Slack"
                    />
                </div>
            </div>
            <ProfileCards />
            <Footer />
        </div>
    )
}

const useStyles = createUseStyles((theme) => ({
    missionTitle: {
        color: theme.colorPrimary,
        display: 'inline-block',
        flexDirection: 'column',
        fontSize: '1.8rem',
        flex:1,
        '@media (min-width: 1024px)': {
            fontSize: '3.5rem',
        },
    },
    missionDescription: {
        marginTop: 5,
        whiteSpace: 'pre-wrap',
        fontSize: '1rem',
        textAlign: 'center',
        flexDirection: 'column',
        flex: 1,
        '@media (min-width: 1024px)': {
            fontSize: '1.5rem',
        },
    },
    titleColor: {
        display: 'inline-block',
        color: theme.colorPrimary,
        fontSize: '4rem',
        '@media (min-width: 1024px)': {
            fontSize: '5rem',
        },
    },
    titleBlack: {
        display: 'inline-block',
        color: 'black',
        marginBottom: 30,
        marginTop: 40,
        fontSize: '4rem',
        '@media (min-width: 1024px)': {
            marginBottom: 50,
            fontSize: '5rem',
        },
    },
    btnContainer: {
        marginTop: 40,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 50,
        width: 200,
        display: 'flex',
        flexDirection: 'column',
    },
    icon:{
        position: 'relative',
        margin: '2px 0px',
        '& img': {
            width: '30px',
            height: 'auto',
            objectFit: 'cover',
        },
        '@media (min-width: 800px)': {
            margin: '2px 2px',
            '& img': {
                borderRadius: '10px',
            },
        },
        '@media (min-width: 1024px)': {
            margin: '0px 5px',
            '& img': {
                width: '90px',
                height: 'auto',
                borderRadius: '10px',
            },
        },
    },
    bar: {
        marginTop: 10,
        marginBottom: 10,
        width: 75,
        height: 1,
        backgroundColor: 'black',
        '@media (min-width: 800px)': {
            marginTop: 10,
            marginBottom: 10,
            width: 95,
            height: 1,
            backgroundColor: 'black',
        },
        '@media (min-width: 1024px)': {
            marginTop: 20,
            marginBottom: 20,
            width: 135,
            height: 1,
            backgroundColor: 'black',
        },
    }
}))

const Mission = ({Image, title, description}) => {
    const classes = useStyles()

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingLeft: 10, paddingRight: 10}}>
            <div className={classes.icon}>{Image}</div>
            <div className={classes.bar}/>
            <h4 className={classes.missionTitle}>{title}</h4>
            <h5 className={classes.missionDescription}>{description}</h5>
        </div>
    )
}

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

export default function AboutUsPage() {
    const classes = useStyles()

    return (
        <div>
            <NavigationBar />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 100}}>
                <h1 style={{marginBottom: 40}}><h1 className={classes.missionTitle}>KDD's</h1> Mission</h1>
                <div style={{display: 'flex', width: 1024, maxWidth: '100%', justifyContent: 'space-between'}}>
                    <Mission
                        Image={<img style={{width: 70, height: 106}} src={aboutUsNetworking} alt={''} />}
                        title="Networking"
                        description={'BBQ Party\nMonthly Meetup\nStudy Group\nand many more...'}
                    />
                    <Mission
                        Image={<img style={{width: 103, height: 84}} src={aboutUsCareer} alt={''} />}
                        title="Career"
                        description={'Referral\nInternal Job Posting\nResume Review\nWorkshop'}
                    />
                    <Mission
                        Image={<img style={{width: 98, height: 89}} src={aboutUsSoftLanding} alt={''} />}
                        title="Soft-Landing"
                        description={'Learn Canadian Culture\nShare Housing\nFinancial Tips'}
                    />
                </div>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',backgroundColor:'#EAEAEA', height: 350}}>
                <h1 style={{marginBottom: 40, marginTop: 40}}>It all started in July 2017</h1>
                <div style={{display: 'flex', width: 900, maxWidth: '100%', justifyContent: 'space-between'}}>
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
            <Footer />
        </div>
    )
}

const useStyles = createUseStyles((theme) => ({
    missionTitle: {
        color: theme.colorPrimary,
        display: 'inline-block',
    },
    missionDescription: {
        marginTop: 5,
        whiteSpace: 'pre-wrap',
        fontSize: '1.5rem',
        textAlign: 'center',
    },
    title: {
        color: theme.colorPrimary,
    },
    btnContainer: {
        marginTop: 40,
        marginLeft: 5,
        marginRight: 5,
        width: 200,
        display: 'flex',
        flexDirection: 'column',
    },
}))

const Mission = ({Image, title, description}) => {
    const classes = useStyles()

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
            <div style={{height: 120, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>{Image}</div>
            <div
                style={{
                    marginTop: 10,
                    marginBottom: 10,
                    width: 135,
                    height: 1,
                    backgroundColor: 'black',
                }}
            />
            <h4 className={classes.missionTitle}>{title}</h4>
            <h5 className={classes.missionDescription}>{description}</h5>
        </div>
    )
}

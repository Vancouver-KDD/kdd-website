import React from 'react'
import {createUseStyles} from 'react-jss'
import NavigationBar from 'components/NavigationBar'
import Footer from 'components/Footer'
import aboutUsNetworking from 'assets/icons/aboutUsNetworking.svg'
import aboutUsCareer from 'assets/icons/aboutUsCareer.svg'
import aboutUsSoftLanding from 'assets/icons/aboutUsSoftLanding.svg'

export default function AboutUsPage() {
    // const classes = useStyles()

    return (
        <div>
            <NavigationBar />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1>KDD's Mission</h1>
                <div style={{display: 'flex', width: 1024, maxWidth: '100%', justifyContent: 'space-between'}}>
                    <Mission
                        Image={<img style={{width: 70, height: 106}} src={aboutUsNetworking} alt={''} />}
                        title="Networking"
                        description={'BBQ Party\nMonthly Meetup\nStudy Groups\nand many more...'}
                    />
                    <Mission
                        Image={<img style={{width: 103, height: 84}} src={aboutUsCareer} alt={''} />}
                        title="Career"
                        description={'hello'}
                    />
                    <Mission
                        Image={<img style={{width: 98, height: 89}} src={aboutUsSoftLanding} alt={''} />}
                        title="Soft-Landing"
                        description={'hello'}
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
    },
    missionDescription: {
        //
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
            <h5>{description}</h5>
        </div>
    )
}

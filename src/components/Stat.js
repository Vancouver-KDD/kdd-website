import React from 'react'
import {createUseStyles} from 'react-jss'
import Trophy from 'assets/images/trophy.png'

export default function Stat() {
    const classes = useStyles()

    return (
        <section className={classes.default}>
            <img className="Trophy" alt="trophy" src={Trophy} />
            <div className={classes.since}>Since July 2017</div>
            <div className={classes.meetup}>37 Meetups</div>
            <div className={classes.member}>1,150 Members</div>
        </section>
    )
}

const useStyles = createUseStyles({
    default: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '543px',
        backgroundColor: 'hsla(0, 0%, 100%, 1)',
        textAlign: 'center',
    },
    since: {
        fontSize: '2.25rem',
        fontWeight: '900',
        marginTop: '2.5rem',
        marginBottom: '2.5rem',
        color: 'rgba(14, 14, 44, 1)',
    },
    meetup: {
        fontSize: '2.25rem',
        fontWeight: '900',
        marginBottom: '2.5rem',
        color: 'rgba(14, 14, 44, 1)',
    },

    member: {
        fontSize: '2.25rem',
        fontWeight: '900',
        marginBottom: '2.5rem',
        color: 'rgba(14, 14, 44, 1)',
    },
})

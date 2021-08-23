import React from 'react'
import {createUseStyles} from 'react-jss'
import StatSmall from 'assets/images/stat-small.png'
import StatLarge from 'assets/images/stat-large.png'

export default function Stat() {
    const classes = useStyles()

    return (
        <section className={classes.default}>
            <div className={classes.image} alt="Statistic image" />
            <div className={classes.statInfo}>
                <div>Since July 2017</div>
                <div>37 Meetups</div>
                <div>1,150 Members</div>
            </div>
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
        '@media (min-width: 768px)': {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
        },
    },
    image: {
        backgroundImage: `url(${StatSmall})`,
        backgroundColor: 'white',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        height: '250px',
        width: '250px',
        '@media (min-width: 768px)': {
            width: 'unset',
            height: 'inherit',
        },
        '@media (min-width: 1024px)': {
            backgroundImage: `url(${StatLarge})`,
        },
    },
    statInfo: {
        fontSize: '3.6rem',
        fontWeight: '900',
        marginTop: '2.5rem',
        marginBottom: '2.5rem',
        color: 'rgba(14, 14, 44, 1)',
        '& > div': {
            marginTop: '2.5rem',
            marginBottom: '2.5rem',
        },
        '@media (min-width: 768px)': {
            fontSize: '4.8rem',
            '& > div': {
                marginTop: '5rem',
                marginBottom: '5rem',
            },
        },
    },
})

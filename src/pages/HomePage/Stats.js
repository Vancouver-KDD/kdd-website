import React from 'react'
import {createUseStyles} from 'react-jss'
import StatSmall from 'assets/images/stat-small.png'
import StatLarge from 'assets/images/stat-large.png'
import {useCollection} from 'store'

export default function Stats() {
    const classes = useStyles()
    const {data} = useCollection({name: 'statistics'})

    return (
        <section className={classes.container}>
            <div className={classes.containerContent}>
                <div className={classes.image} alt="Statistic image" />
                <div className={classes.statInfo}>
                    <div>Since July 2017</div>
                    <div>{data?.meetups ?? '39+'} Meetups</div>
                    <div>{data?.members ?? '1250+'} Members</div>
                </div>
            </div>
        </section>
    )
}

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'hsla(0, 0%, 100%, 1)',
        textAlign: 'center',
    },
    containerContent: {
        height: 543,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 1024,
        maxWidth: '100%',
        '@media (min-width: 768px)': {
            alignItems: 'initial',
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
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        },
    },
})

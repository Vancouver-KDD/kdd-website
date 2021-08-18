import React from 'react'
import {Image} from 'common/Image'
import {createUseStyles} from 'react-jss'
import foodlyLogo from 'assets/images/foodly-logo-large.svg'

export default function Sponsor() {
    const classes = useStyles()

    return (
        <section className={classes.default}>
            <div className={classes.title}>Proudly sponsored by</div>
            <Image img={foodlyLogo} alt="Foodly" />
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
        height: '214px',
        backgroundColor: 'hsla(0, 0%, 92%, 1)',
    },
    title: {
        fontSize: '2.4rem',
        fontWeight: '900',
        marginBottom: '3rem',
    },
})

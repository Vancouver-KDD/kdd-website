import React from 'react'
import {Image} from 'common/Image'
import {createUseStyles} from 'react-jss'
import {useCollection} from 'store'

export default function Sponsor() {
    const classes = useStyles()
    const {data, loading, error} = useCollection({name: 'sponsors'})

    return (
        <section className={classes.default}>
            <div className={classes.title}>Proudly sponsored by</div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                {loading && <span>loading...</span>}
                {!!error && <span>ERROR: {error.message}</span>}
                {data?.map((sponsor) => {
                    const imageUrl = sponsor?.logo?.[0]?.formats?.small?.url || sponsor?.logo?.[0]?.url
                    return (
                        <div style={{padding: 10}}>
                            <Image key={sponsor.id} className={classes.sponsorImage} img={imageUrl} alt="Foodly" />
                        </div>
                    )
                })}
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
        height: '214px',
        backgroundColor: 'hsla(0, 0%, 92%, 1)',
    },
    title: {
        fontSize: '2.4rem',
        fontWeight: '900',
        marginBottom: '3rem',
    },
    sponsorImage: {
        width: 300,
        maxHeight: 80,
        objectFit: 'contain',
    },
})

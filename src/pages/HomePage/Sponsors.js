import React from 'react'
import {Image} from 'components/Image'
import {createUseStyles} from 'react-jss'
import {useCollection} from 'store'

export default function Sponsors() {
    const classes = useStyles()
    const {data, loading, error} = useCollection({name: 'sponsors'})

    return (
        <section className={classes.default}>
            <div className={classes.title}>Proudly sponsored by</div>
            <div className={classes.sponsorContainer}>
                {loading && <span>loading...</span>}
                {!!error && <span>ERROR: {error.message}</span>}
                {data?.map?.((sponsor) => {
                    const imageUrl = sponsor?.logo?.[0]?.formats?.small?.url || sponsor?.logo?.[0]?.url
                    return (
                        <div key={sponsor.id} className={classes.pad10}>
                            <Image className={classes.sponsorImage} img={imageUrl} url={sponsor.url} alt={`${sponsor.name} logo`} />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

const useStyles = createUseStyles({
    pad10: {padding: 10},
    default: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        minHeight: 214,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: 'hsla(0, 0%, 92%, 1)',
    },
    sponsorContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: '2.4rem',
        fontWeight: '900',
        marginBottom: '3rem',
    },
    sponsorImage: {
        width: 260,
        maxHeight: 80,
        objectFit: 'contain',
    },
})

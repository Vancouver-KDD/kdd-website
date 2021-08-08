import React from 'react'
import PropTypes from 'prop-types'
import {createUseStyles} from 'react-jss'

function PhotoCard({src, alt}) {
    const classes = useStyles()

    return (
        <div className={classes.photoCard}>
            <img src={src} alt={alt} />
        </div>
    )
}

PhotoCard.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
}

const useStyles = createUseStyles(() => ({
    photoCard: {
        margin: '2px 2px',
        '& img': {
            width: '375px',
            objectFit: 'cover',
        },
        '@media (min-width: 800px)': {
            '& img': {
                borderRadius: '10px',
            },
        },
        '@media (min-width: 1024px)': {
            margin: '0px 5px',
            '& img': {
                width: '502px',
                borderRadius: '10px',
            },
        },
    },
}))

export default PhotoCard

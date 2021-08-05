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
        '& img': {
            width: '375px',
            padding: '0px 1px',
            objectFit: 'cover',
            borderradius: '0px',
        },
    },
}))

export default PhotoCard

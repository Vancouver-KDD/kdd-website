import React from 'react'
import PropTypes from 'prop-types'
import {createUseStyles} from 'react-jss'

export default function PhotoCard({src, alt, description, author, onClick}) {
    const classes = useStyles()
    return (
        <div className={classes.photoCard} onClick={onClick}>
            <img src={src} loading="lazy" alt={alt} />
            <div>
                <div className={classes.photoInfo}>
                    <p className={classes.photoDescription}>{description}</p>
                    <p className={classes.photoAuthor}>by {author}</p>
                </div>
            </div>
        </div>
    )
}

PhotoCard.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.string,
    onClick: PropTypes.func,
}

const useStyles = createUseStyles({
    photoCard: {
        position: 'relative',
        margin: '2px 0px',
        cursor: 'pointer',
        '&:hover div': {
            backgroundColor: 'rgba(40, 40, 40, 0.5)',
        },
        '& img': {
            width: 375,
            height: 215,
            objectFit: 'cover',
        },
        '& div': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: 375,
            height: 215,
            transition: 'all .4s linear',
            backgroundColor: 'rgba(255, 255, 255, 0)',
        },
        '@media (min-width: 800px)': {
            margin: '2px 2px',
            '& img': {
                borderRadius: 10,
            },
            '& div': {
                borderRadius: 10,
            },
        },
        '@media (min-width: 1024px)': {
            margin: '0px 5px',
            '& img': {
                width: 502,
                height: 288,
                borderRadius: 10,
            },
            '& div': {
                width: 502,
                height: 288,
                borderRadius: 10,
            },
        },
    },
    photoInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'rgba(255, 255, 255, 0)',
        '&:hover p': {
            color: 'rgba(255, 255, 255, 1)',
        },
    },
    photoDescription: {
        width: 330,
        textAlign: 'left',
        fontSize: '1.8rem',
        fontWeight: '700',
        wordBreak: 'break-all',
        '@media (min-width: 1024px)': {
            width: 437,
        },
    },
    photoAuthor: {
        position: 'absolute',
        bottom: 20,
        width: 330,
        fontSize: '1.4rem',
        fontWeight: '500',
        textAlign: 'right',
        '@media (min-width: 1024px)': {
            width: 437,
        },
    },
})

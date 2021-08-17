/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import PropTypes from 'prop-types'
import {createUseStyles} from 'react-jss'

function PhotoCard({src, alt, description, author, onClick}) {
    const classes = useStyles()

    const handlClick = () => {
        onClick?.()
    }

    return (
        <div className={classes.photoCard} onClick={handlClick}>
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

const useStyles = createUseStyles(() => ({
    photoCard: {
        position: 'relative',
        margin: '2px 0px',
        cursor: 'pointer',
        '&:hover div': {
            opacity: '0.5',
        },
        '& img': {
            width: '375px',
            height: '215px',
            objectFit: 'cover',
        },
        '& div': {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '375px',
            height: '215px',
            backgroundColor: '#000000',
            opacity: '0',
            transition: 'all .4s linear',
        },
        '@media (min-width: 800px)': {
            margin: '2px 2px',
            '& img': {
                borderRadius: '10px',
            },
            '& div': {
                borderRadius: '10px',
            },
        },
        '@media (min-width: 1024px)': {
            margin: '0px 5px',
            '& img': {
                width: '502px',
                height: '288px',
                borderRadius: '10px',
            },
            '& div': {
                width: '502px',
                height: '288px',
                borderRadius: '10px',
            },
        },
    },
    photoInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFFFFF',
    },
    photoDescription: {
        width: '330px',
        fontSize: '1.8rem',
        fontWeight: '700',
        wordBreak: 'break-all',
        '@media (min-width: 1024px)': {
            width: '437px',
        },
    },
    photoAuthor: {
        width: '330px',
        fontSize: '1.4rem',
        fontWeight: '700',
        textAlign: 'right',
        '@media (min-width: 1024px)': {
            width: '437px',
        },
    },
}))

export default PhotoCard

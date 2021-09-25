import React from 'react'
import PropTypes from 'prop-types'
import {createUseStyles} from 'react-jss'
import iconCloseButton from 'assets/icons/closeButton.svg'

export default function Modal({photoUrl, photoAlt, photoDescription, photoAuthor, visible, toggleModal}) {
    const classes = useStyles(visible)

    return (
        <div className={classes.modal} onClick={toggleModal}>
            <div className={classes.modalBody}>
                <div>
                    <img src={photoUrl} alt={photoAlt} />
                </div>
                <span className={classes.photoDescription}>
                    {photoDescription}
                    <p>by {photoAuthor ?? 'Anonymous'}</p>
                </span>
            </div>
        </div>
    )
}

Modal.propTypes = {
    photoUrl: PropTypes.string,
    photoAlt: PropTypes.string,
    photoDescription: PropTypes.string,
    photoAuthor: PropTypes.string,
    visible: PropTypes.bool,
    toggleModal: PropTypes.func,
}

const useStyles = createUseStyles({
    modal: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: (visible) => (visible ? 'block' : 'none'),
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1100,
    },
    modalBody: {
        position: 'absolute',
        top: '45%',
        left: '50%',
        width: 375,
        maxHeight: 680,
        textAlign: 'center',
        transform: 'translateX(-50%) translateY(-50%)',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        zIndex: 1200,
        '& div': {
            display: 'flex',
            backgroundColor: 'black',
        },
        '& img': {
            width: 375,
            maxHeight: 540,
            objectFit: 'contain',
        },
        '@media (min-width: 800px)': {
            width: 760,
            '& img': {
                width: 760,
            },
        },
        '@media (min-width: 1024px)': {
            width: 1024,
            '& img': {
                width: 1024,
            },
        },
    },
    photoDescription: {
        display: 'block',
        margin: '1rem auto',
        width: 375,
        color: '#fff',
        fontSize: '1.4rem',
        fontWeight: '700',
        textAlign: 'left',
        '& p': {
            fontSize: '1rem',
            textAlign: 'right',
        },
        '@media (min-width: 800px)': {
            padding: '0 4rem',
            width: 760,
            fontSize: '2rem',
            '& p': {
                fontSize: '1.6rem',
            },
        },
        '@media (min-width: 1024px)': {
            padding: '0 8rem',
            width: 1024,
            fontSize: '2.4rem',
            '& p': {
                fontSize: '1.8rem',
            },
        },
    },
    closeButton: {
        position: 'absolute',
        top: 15,
        right: 15,
        width: 30,
        height: 30,
        border: 0,
        background: `url(${iconCloseButton}) no-repeat right`,
        backgroundSize: 30,
    },
})

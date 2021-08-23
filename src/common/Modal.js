import React from 'react'
import PropTypes from 'prop-types'
import {createUseStyles} from 'react-jss'
import iconCloseButton from 'assets/icons/closeButton.svg'

export const Modal = ({photoUrl, photoAlt, photoDescription, photoAuthor, visible, toggleModal}) => {
    const classes = useStyles(visible)
    const closeModal = () => {
        toggleModal?.()
    }

    return (
        <div className={classes.modal} onClick={closeModal}>
            <div className={classes.modalBody}>
                {/* <input className={classes.closeButton} type="button" onClick={closeModal} /> */}
                <div>
                    <img src={photoUrl} alt={photoAlt} />
                </div>
                <p className={classes.photoDescription}>
                    {photoDescription}
                    <p>by {photoAuthor}</p>
                </p>
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

const useStyles = createUseStyles(() => ({
    modal: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        display: (_isVisible) => (_isVisible ? 'block' : 'none'),
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: '98',
    },
    modalBody: {
        position: 'absolute',
        top: '45%',
        left: '50%',
        width: '375px',
        maxHeight: '680px',
        textAlign: 'center',
        transform: 'translateX(-50%) translateY(-50%)',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        // borderRadius: '10px',
        // boxShadow: '0 2px 3px 0 rgba(34, 36, 38, 0.15)',
        zIndex: '99',
        '& div': {
            display: 'flex',
            backgroundColor: 'black',
        },
        '& img': {
            width: '375px',
            maxHeight: '540px',
            objectFit: 'contain',
            // borderRadius: '10px'
        },
        '@media (min-width: 800px)': {
            width: '760px',
            '& img': {
                width: '760px',
            },
        },
        '@media (min-width: 1024px)': {
            width: '1024px',
            '& img': {
                width: '1024px',
            },
        },
    },
    photoDescription: {
        margin: '1rem auto',
        width: '375px',
        color: '#fff',
        fontSize: '1.4rem',
        fontWeight: '700',
        textAlign: 'left',
        '& p': {
            fontSize: '1rem',
            fontWeight: '700',
            textAlign: 'right',
        },
        '@media (min-width: 800px)': {
            padding: '0 4rem',
            width: '760px',
            fontSize: '2rem',
            '& p': {
                fontSize: '1.6rem',
                textAlign: 'right',
            },
        },
        '@media (min-width: 1024px)': {
            padding: '0 8rem',
            width: '1024px',
            fontSize: '2.4rem',
            '& p': {
                fontSize: '1.8rem',
                textAlign: 'right',
            },
        },
    },
    closeButton: {
        position: 'absolute',
        top: '15px',
        right: '15px',
        width: '30px',
        height: '30px',
        border: '0',
        background: `url(${iconCloseButton}) no-repeat right`,
        backgroundSize: '30px',
    },
}))

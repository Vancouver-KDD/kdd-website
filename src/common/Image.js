import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export const Image = ({className, img, url, alt = '', fallbackImg = ''}) => {
    let errorFlag = false

    const handleError = (e) => {
        if (!errorFlag) {
            errorFlag = true
            e.target.src = fallbackImg
        }
    }

    if (typeof img === 'string') {
        if (url) {
            return (
                <a href={url}
                    target="_blank"
                    rel="noreferrer">
                    <img className={classnames('kdd-image', className)} src={img} alt={alt} onError={handleError} />
                </a>
            )
        }
    }

    return <img className={classnames('kdd-image', className)} src={img} alt={alt} onError={handleError} />
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.node,
    url: PropTypes.string,
    altText: PropTypes.string,
    fallbackImg: PropTypes.node,
}

import React from 'react'

type PropTypes = {direction?: 'horizontal' | 'vertical'; x1: number; x2: number; y1: number; y2: number; style: React.CSSProperties}

export default function Space(props: PropTypes) {
    const {direction, x1 = 375, x2 = 1024, y1 = 0, y2, style = {}, ...restProps} = props
    const minWidth = !direction || direction === 'horizontal' ? y1 : 0
    const minHeight = !direction || direction === 'vertical' ? y1 : 0

    const maxWidth = (!direction || direction === 'horizontal') && y2 ? y2 : undefined
    const maxHeight = (!direction || direction === 'vertical') && y2 ? y2 : undefined

    const slope = (y2 - y1) / (x2 - x1)
    const b = y1 - x1 * slope

    const sizeStyle = `calc(${(slope * 100).toFixed(5)}vw + ${b}px)`
    const directionStyle = direction
        ? {
              [direction === 'vertical' ? 'height' : 'width']: sizeStyle,
          }
        : {
              width: sizeStyle,
              height: sizeStyle,
          }

    const _style: React.CSSProperties = {
        minWidth,
        maxWidth,
        minHeight,
        maxHeight,
        ...directionStyle,
        ...style,
    }

    return <div {...restProps} style={_style}></div>
}

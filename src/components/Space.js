import React from 'react'

export default function Space(props) {
    const {direction, x1, x2, y1 = 0, y2, style = {}, ...restProps} = props
    const minWidth = !direction || direction === 'horizontal' ? y1 : 0
    const minHeight = !direction || direction === 'vertical' ? y1 : 0

    const maxWidth = (!direction || direction === 'horizontal') && y2 ? y2 : undefined
    const maxHeight = (!direction || direction === 'vertical') && y2 ? y2 : undefined

    const slope = (x2 - x1) / (y2 - y1)
    const b = y1 - x1 * slope

    const sizeStyle = `calc(${(slope * 100).toFixed(5)}vw + ${b}px)`
    const directionStyle = direction
        ? {
              [direction]: sizeStyle,
          }
        : {
              width: sizeStyle,
              height: sizeStyle,
          }

    const _style = {
        minWidth,
        maxWidth,
        minHeight,
        maxHeight,
        ...directionStyle,
        ...style,
    }

    return <div {...restProps} style={_style}></div>
}

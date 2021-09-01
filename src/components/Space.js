import React from 'react'

export default function Space(props) {
    const {vertical, xStart, xEnd, spaceStart = 0, spaceEnd, style, ...restProps} = props
    const direction = vertical ? 'height' : 'width'
    const minHeight = vertical ? spaceStart : 0
    const minWidth = !vertical ? spaceStart : 0

    const maxHeight = vertical && spaceEnd ? spaceEnd : undefined
    const maxWidth = !vertical && spaceEnd ? spaceEnd : undefined

    const slope = (xEnd - xStart) / (spaceEnd - spaceStart)
    const b = spaceStart - xStart * slope

    const _style = {
        minWidth,
        maxWidth,
        minHeight,
        maxHeight,
        [direction]: `calc(${(slope * 100).toFixed(5)}vw + ${b}px)`,
        ...(style ?? {}),
    }

    return <div {...restProps} style={_style}></div>
}

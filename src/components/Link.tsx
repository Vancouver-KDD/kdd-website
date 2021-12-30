import React from 'react'
import type {ComponentProps} from 'react'
import {Link as MuiLink} from '@mui/material'
import {Link as ReactRouterLink} from 'react-router-dom'

type PropTypes = ComponentProps<typeof MuiLink> & ComponentProps<typeof ReactRouterLink>

/**
 * @example
 * <Link to="loading">internal link</Link>
 * @example
 * <Link component="a" href="https://google.ca">external link</Link>
 */
export default function Link({component, ...props}: {component?: typeof ReactRouterLink} & PropTypes): JSX.Element
export default function Link({component, ...props}: {component: 'a'} & ComponentProps<typeof MuiLink>): JSX.Element
export default function Link({component = ReactRouterLink, ...props}: any) {
  return <MuiLink component={component} {...props} />
}

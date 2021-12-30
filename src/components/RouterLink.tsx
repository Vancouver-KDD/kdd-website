import React from 'react'
import type {ComponentProps} from 'react'
import {Link} from '@mui/material'
import {Link as ReactRouterLink} from 'react-router-dom'

type PropTypes = ComponentProps<typeof Link> & ComponentProps<typeof ReactRouterLink>

export default function RouterLink(props: PropTypes) {
  return <Link component={ReactRouterLink} {...props} />
}

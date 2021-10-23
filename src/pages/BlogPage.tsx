import React from 'react'
import {useRouteMatch} from 'react-router-dom'
import {createUseStyles} from 'react-jss'
import NavigationBar from 'components/NavigationBar'
import Footer from 'components/Footer'
import {Space} from 'components'

export default function BlogPage() {
    return (
        <>
            <NavigationBar />
            <h1>Blog</h1>
            <Footer />
        </>
    )
}

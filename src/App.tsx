import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {ThemeProvider} from 'react-jss'
import HomePage from './pages/HomePage'
import EventsPage from './pages/EventsPage'
import EventDetailsPage from './pages/EventDetailsPage'
import PhotosPage from './pages/PhotosPage'
import AboutUsPage from './pages/AboutUsPage'

const theme = {
    colorPrimary: 'hsl(343, 91%, 56%)',
    colorPrimaryHover: 'hsl(343, 87%, 61%)',
    colorPrimaryDisabled: 'hsl(343, 100%, 80%)',
    colorSecondary: 'hsl(239, 82%, 65%)',
    colorSecondaryHover: 'hsl(240, 81%, 71%)',
    colorSecondaryDisabled: 'hsl(239, 82%, 81%)',
}
export type themeType = typeof theme

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <main>
                    <Switch>
                        <Route exact path="/" component={() => <HomePage />} />
                        <Route exact path="/photos" component={() => <PhotosPage />} />
                        <Route exact path="/events" component={() => <EventsPage />} />
                        <Route exact path="/events/:id" component={() => <EventDetailsPage />} />
                        <Route exact path="/about-us" component={() => <AboutUsPage />} />
                    </Switch>
                </main>
            </Router>
        </ThemeProvider>
    )
}

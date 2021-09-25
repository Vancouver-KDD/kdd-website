import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {ThemeProvider} from 'react-jss'
import HomePage from './pages/HomePages'
import EventsPage from './pages/EventsPage'
import PhotoPage from './pages/PhotoPage'
import AboutUsPage from './pages/AboutUsPage'

const theme = {
    colorPrimary: 'hsl(343, 91%, 56%)',
    colorPrimaryHover: 'hsl(343, 87%, 61%)',
    colorPrimaryDisabled: 'hsl(343, 100%, 80%)',
    colorSecondary: 'hsl(239, 82%, 65%)',
    colorSecondaryHover: 'hsl(240, 81%, 71%)',
    colorSecondaryDisabled: 'hsl(239, 82%, 81%)',
}

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <main>
                    <Switch>
                        <Route exact path="/" component={() => <HomePage />} />
                        <Route path="/photos" component={() => <PhotoPage />} />
                        <Route exact path="/events/:id" component={() => <p>event id</p>} />
                        <Route path="/events" component={() => <EventsPage />} />
                        <Route path="/about-us" component={() => <AboutUsPage />} />
                    </Switch>
                </main>
            </Router>
        </ThemeProvider>
    )
}
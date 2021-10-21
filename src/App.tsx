import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './pages/HomePage'
import EventsPage from './pages/EventsPage'
import EventDetailsPage from './pages/EventDetailsPage'
import PhotosPage from './pages/PhotosPage'
import AboutUsPage from './pages/AboutUsPage'
import {ThemeProvider, createTheme, responsiveFontSizes} from '@mui/material/styles'

const theme = responsiveFontSizes(
    createTheme({
        components: {
            MuiLink: {
                styleOverrides: {},
            },
        },
        palette: {
            primary: {
                main: 'hsl(343, 91%, 56%)',
            },
            secondary: {
                main: 'hsl(239, 82%, 65%)',
            },
        },
        typography: {},
    }),
)

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route exact path="/" component={() => <HomePage />} />
                    <Route exact path="/photos" component={() => <PhotosPage />} />
                    <Route exact path="/events" component={() => <EventsPage />} />
                    <Route exact path="/events/:id" component={() => <EventDetailsPage />} />
                    <Route exact path="/about-us" component={() => <AboutUsPage />} />
                </Switch>
            </Router>
        </ThemeProvider>
    )
}

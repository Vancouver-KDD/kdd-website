import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {HomePage, EventsPage, EventDetailsPage, PhotosPage, AboutUsPage, JobsPage} from './pages'
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
                    <Route exact path="/jobs" component={() => <JobsPage />} />
                </Switch>
            </Router>
        </ThemeProvider>
    )
}

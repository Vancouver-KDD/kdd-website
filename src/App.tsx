import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {ThemeProvider} from 'react-jss'
import Homepage from './pages/Homepage'
import Eventspage from './pages/Eventspage'
import Photospage from './pages/Photospage'
import AboutUsPage from './pages/AboutUsPage'
import ProjectsPage from './pages/ProjectsPage'
import BlogPage from './pages/BlogPage'
import JobsPage from './pages/JobsPage'

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
                        <Route exact path="/" component={() => <Homepage />} />
                        <Route path="/photos" component={() => <Photospage />} />
                        <Route exact path="/events/:id" component={() => <p>event id</p>} />
                        <Route path="/events" component={() => <Eventspage />} />
                        <Route path="/about-us" component={() => <AboutUsPage />} />
                        <Route path="/projects" component={() => <ProjectsPage />} />
                        <Route path="/blog" component={() => <BlogPage />} />
                        <Route path="/jobs" component={() => <JobsPage />} />
                    </Switch>
                </main>
            </Router>
        </ThemeProvider>
    )
}

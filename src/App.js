import React, {memo} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {ThemeProvider} from 'react-jss'
import Homepage from './pages/Homepage'

const theme = {
    colorPrimary: 'hsl(343, 91%, 56%)',
    colorPrimaryHover: 'hsl(343, 87%, 61%)',
    colorPrimaryDisabled: 'hsl(343, 100%, 80%)',
    colorSecondary: 'hsl(239, 82%, 65%)',
    colorSecondaryHover: 'hsl(240, 81%, 71%)',
    colorSecondaryDisabled: 'hsl(239, 82%, 81%)',
}

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <main>
                    <Switch>
                        <Route exact path="/" component={() => <Homepage />} />
                        <Route exact path="/photos/:id" component={() => <p>photo id</p>} />
                        <Route path="/photos" component={() => <p>photos</p>} />
                        <Route exact path="/events/:id" component={() => <p>event id</p>} />
                        <Route path="/events" component={() => <p>events</p>} />
                        <Route path="/about-us" component={() => <p>about-us</p>} />
                    </Switch>
                </main>
            </Router>
        </ThemeProvider>
    )
}

export default memo(App)

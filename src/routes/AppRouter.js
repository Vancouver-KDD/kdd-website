import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={() => <p>home</p>} />

                <Route exact path="/photos/:id" component={() => <p>photo id</p>} />
                <Route path="/photos" component={() => <p>photos</p>} />

                <Route exact path="/events/:id" component={() => <p>event id</p>} />
                <Route path="/events" component={() => <p>events</p>} />

                <Route path="/about-us" component={() => <p>about-us</p>} />
            </Switch>
        </Router>
    )
}

export default AppRouter

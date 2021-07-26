import React, {memo} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { ThemeProvider } from "react-jss";
import Homepage from './pages/Homepage';

const theme = {
  colorPrimary: '#F52763',
  colorPrimaryHover: '#F24476',
  colorPrimaryDisabled: '#FF97B5',
  colorSecondary: '#5D5FEF',
  colorSecondaryHover: '#7879F1',
  colorSecondaryDisabled: '#A5A6F6',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <main>
          <Switch>
            <Route exact path="/" component={() => (<Homepage />)} />
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

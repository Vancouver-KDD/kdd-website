import React, {memo} from 'react'
import Router from './routes/AppRouter';

function App() {
  return (
    <div>
      Welcome, KDD steppers!
      <Router />
    </div>
  )
}

export default memo(App)

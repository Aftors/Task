import React from 'react'
import classes from './app.module.scss'
import AppRouter from './router/AppRouter'

function App() {
  return (
    <div className={classes.app}>
      <AppRouter />
    </div>
  )
}

export default App

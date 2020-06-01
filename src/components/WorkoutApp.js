import React from 'react'

import ApplicationViews from './ApplicationViews'
import NavBar from './nav/NavBar'

export default function WorkoutApp() {
  return (
    <div>
      <NavBar />
      <ApplicationViews />
    </div>
  )
}

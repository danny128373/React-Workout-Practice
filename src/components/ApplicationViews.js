import React from 'react'
import { Route } from "react-router-dom";
import NewWorkoutList from './new-workout/NewWorkoutList'

export default function ApplicationViews() {
  return (
    <React.Fragment>
      <Route path="/" render={(props) => {
        return <NewWorkoutList {...props} />
      }} />
    </React.Fragment>
  )
}
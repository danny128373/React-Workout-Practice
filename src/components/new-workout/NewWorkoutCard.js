import React from 'react'

export default function NewWorkoutCard(props) {
  return (
    <div>
      <h2>{props.workout.workout.exerciseId}</h2>
    </div>
  )
}

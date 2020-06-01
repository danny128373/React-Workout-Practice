import React, { useState, useEffect } from 'react';
//import the components we will need
import NewWorkoutCard from './NewWorkoutCard';
import NewWorkoutManager from '../../modules/NewWorkoutManager';

const NewWorkoutList = () => {
  // The initial state is an empty array
  const [workouts, setWorkouts] = useState([]);

  const getWorkouts = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return NewWorkoutManager.getAll().then(workoutsFromAPI => {
      setWorkouts(workoutsFromAPI)
    });
  }

  // got the animals from the API on the component's first render
  useEffect(() => {
    getWorkouts();
  }, [])

  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    <div className="container-cards">
      {workouts.map(workout => <NewWorkoutCard key={workout.id} workout={workout} />)}
    </div>
  )
}
export default NewWorkoutList
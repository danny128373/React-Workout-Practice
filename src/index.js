import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"

import WorkoutApp from './components/WorkoutApp'

ReactDOM.render(
  <Router>
    <WorkoutApp />
  </Router>,
  document.getElementById('root')
);
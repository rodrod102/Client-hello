import React from 'react';
import GameMath from './components/GameMath'
import Diary from './components/Diary'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
        <Route exact path="/" component={Diary} />
        <Route exact path="/game" component={GameMath}/>
    </Router >
  );
}
export default App;

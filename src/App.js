import React, { useEffect, useStatet} from 'react'
import PearCard from './PearCard'
import PearPage from './PearPage'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';

const App = () => {
  const [developers, setDevelopers] = useStatet ([]);
  useEffect(()) => {
    axios.get ('/data.json')
    .then (response => setDevelopers(response.data))
    .catch(error => console.error ("We have a trouble", error));
  }[]

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path="/">
            <div className='card-container'>
              {developers.map(dev =>(
                <link to {'/developer/${dev.id}'} key = {dev.id}>
                  <PearCard developer={dev} />
                </link>
              ))}
            </div>
          </Route>
          <Route path ="/developer/:id" Component={PearPage}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;

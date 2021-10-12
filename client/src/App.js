
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Login from './components/Login';
import Heading from './components/Heading'
import Register from './components/Register';
import Journal from './components/Journal';
import AddToDoList from './components/AddToDoList';
import Layout from './pages/Layout';
import axios from 'axios'
import { useEffect } from 'react';
const App = () => {
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BaseURL}/journal/getall/6154a1b2496c5372c3a7a0fb`).then(response => console.log(response))

  }, [])
  return (
    <Router>
      <Switch>
        <Route path="/test">
          <h1>TESTING THE ROUTER</h1>
        </Route>
        <Route exact path="/">
          <Heading />
          <Layout>
            <Landingpage />
          </Layout>
        </Route>
        <Route path="/todo">
          <Heading />
          <Layout>
            <AddToDoList />
          </Layout>
        </Route>
        <Route path="/journal">
          <Heading />
          <Layout>
            <Journal />
          </Layout>
        </Route>
        {/* <Route path="*">
          404 not found
        </Route> */}
      </Switch>
    </Router>
  )
}

export default App

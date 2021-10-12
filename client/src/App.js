
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
import { useEffect } from 'react';
import { createTodo, GetallJournal, GetallTodo, getJournal, getTodo } from './api/db';

const userid = '6165898a794bfcedccf77f45'
const journalid = '61658c86794bfcedccf77f61'
const todoid = '61659742d68f05a4c400ac08'
const App = () => {
  useEffect(() => {
    (async () => {
      const todoArray = await createTodo({ data: "goddman" }, '6165898a794bfcedccf77f45')
      console.log(todoArray)
    })()

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

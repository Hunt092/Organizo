
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Heading from './components/Heading'
import Journal from './components/Journal';
import AddToDoList from './components/AddToDoList';
import Layout from './pages/Layout';
import { useEffect } from 'react';
import { createTodo, GetallJournal, GetallTodo, getJournal, getTodo } from './api/db';
import Auth from './pages/Auth';
import { useStateValue } from './Store/StateProvider';

const userid = '6165898a794bfcedccf77f45'
const journalid = '61658c86794bfcedccf77f61'
const todoid = '61659742d68f05a4c400ac08'
const App = () => {
  const [{ user }, dispatch] = useStateValue()
  useEffect(() => {
    let userid = localStorage.getItem('userid')
    if (userid) {
      dispatch({
        type: 'SET_USER',
        user: userid
      })
    }

  }, [])
  return (
    <Router>
      {!user ? <Auth /> :
        <Switch>
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
      }
    </Router>
  )
}

export default App

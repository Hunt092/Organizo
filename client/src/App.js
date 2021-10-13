
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Landingpage from './components/Landingpage';
import Heading from './components/Heading'
import AddToDoList from './components/AddToDoList';
import Layout from './pages/Layout';
import { useEffect } from 'react';
import { createTodo, GetallJournal, GetallTodo, getJournal, getTodo } from './api/db';
import Auth from './pages/Auth';
import { useStateValue } from './Store/StateProvider';
import JournalPage from './pages/JournalPage'
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
    if (user) {
      (async () => {
        console.log("HERE");
        let todoarray = await GetallTodo(user)
        dispatch({
          type: 'UPDATE__TODOS',
          todos: todoarray
        })
        let journalarray = await GetallJournal(user)
        dispatch({
          type: "UPDATE__JOURNALS",
          journals: journalarray
        })
      }
      )()
    }
  }, [user])
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
              <JournalPage />
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


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
import { GetallJournal, GetallTodo } from './api/db';
import Auth from './pages/Auth';
import { useStateValue } from './Store/StateProvider';
import JournalPage from './pages/JournalPage'

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
  }, [user, dispatch])
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

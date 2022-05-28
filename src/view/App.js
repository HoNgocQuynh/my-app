import logo from './logo.svg';
import './App.scss';
import Nav from './Nav/Nav';
import Hello from './Example/Hello';
import Todos from './Todos/Todos';
import Demo from './Todos/Demo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserList from './User/UserList';
import UserDetail from './User/UserDetail';
import RatingStar from './RatingStar';
import Layout from './ExternalRoute/Layout';
import Xyz from './ExternalRoute/Xyz';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, useRouteMatch,
  useParams, withRouter
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />

          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/demo">
              <Demo />
            </Route>
            <Route path="/todo">
              <Todos />
            </Route>
            <Route path="/rating">
              <RatingStar />
            </Route>
            <Route path="/" exact>
              <Hello />
            </Route>
            <Route path="/user" exact>
              <UserList />
            </Route>
            <Route path="/layout">
              <Layout />
            </Route>
            <Route path="/user/:id" exact>
              <UserDetail />
            </Route>
          </Switch>
          {/* <Demo /> */}

          {/* <Todos /> */}
          {/* <Hello/> */}
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>

  );
}


export default App;

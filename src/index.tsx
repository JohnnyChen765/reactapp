import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Link, Route, Switch
} from "react-router-dom";
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const actualGod = "Triste"
export const GodContext = React.createContext(actualGod)

ReactDOM.render(
  <React.StrictMode>
    <GodContext.Provider value={actualGod}>
      <App />
      {true && <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/about">
              <App message={"This is about"} />
            </Route>
            <Route path="/topics">
              <App message={"This is topics"} />
            </Route>
            <Route path="/path">
              <App message={"This is path"} />
            </Route>
          </Switch>
        </div>
      </Router>}
    </GodContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

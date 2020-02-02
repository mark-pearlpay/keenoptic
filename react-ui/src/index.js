import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import reducers from './reducers';
import App from './App';
import './index.css';

import Page404 from './routes/404/components/404'

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  reducers,
  undefined,
  compose(applyMiddleware(middleware))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
        <Route component={Page404} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import { render } from 'react-dom';
import App from './App';
import NotFound from './components/NotFound/NotFound';
import Create from './components/Create/Create';
import Explore from './components/Explore/Explore';
import Presets from './components/Presets/Presets';
import Export from './components/Export/Export';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

var router = (
  <Provider store={store} >
    <Router history={history}>
      <Route path="/" component={App}> 
        <IndexRoute component={Create} />
        <Route path="create" component={Create} />
        <Route path="explore" component={Explore} />
        <Route path="presets" component={Presets} />
        <Route path="export" component={Export} />
      </Route>
      <Route path="*" component={NotFound}/>
    </Router>
  </Provider>
);

render(router, document.getElementById('app'));
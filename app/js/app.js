import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router';
import Timer from './components/Timer/Timer';
import NameList from './components/NameList/NameList';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Main from './components/Main/Main';
import NameProfile from './components/NameList/NameProfile';
import ProductList from './components/Products/ProductList';
import ProductProfile from './components/Products/ProductProfile';


class App extends React.Component {
  render() {
    return (
      <div>
        <Layout />
      </div>

    )
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Main} />
      <Route path="/" component={Main} />
      <Route path="timer" component={Timer} />

      <Route path="namelist">
        <IndexRoute path="namelist" component={NameList} />
        <Route path=":id" component={NameProfile} />
      </Route>

      <Route path="productlist">
        <IndexRoute component={ProductList} />
        <Route path=":id" component={ProductProfile} />
      </Route>

      <Redirect from="users" to="namelist" />
      <Redirect from="user/:id" to="namelist/:id" />
      <Route path="*" component={PageNotFound} />

    </Route>
  </Router>,
  document.getElementById('app')
);

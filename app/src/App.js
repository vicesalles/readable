import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import Default from './layouts/Default';
import Category from './layouts/Category';
import Post from './layouts/Post';
import Edit from './layouts/Edit';
import Broken from './layouts/Broken';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
       
        <Switch>
          <Route path="/" exact component={Default} />
          <Route path="/category/:id" component={Category} />
          <Route path="/post/:id" component={Post} />
          <Route path="/edit/:id" component={Edit} />
          <Route component={Broken} />
        </Switch>
       
        <div className="container">
          <div className="cont">&nbsp;</div>
        </div>
      </div>
    );
  }
}



export default withRouter(connect()(App));

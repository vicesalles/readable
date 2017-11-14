import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import Default from './layouts/Default';
import Category from './layouts/Category';
import Post from './layouts/Post';
import Edit from './layouts/Edit';
import Broken from './layouts/Broken';

function App() {

  return (
    <div className="container-fluid">

      <Switch>
        <Route path="/" exact component={Default} />
        <Route path="/edit/:id" exact component={Edit} />
        <Route path="/category/:id" component={Category} />
        <Route path="/:category/:id" exact component={Post} />       
        <Route component={Broken} />
      </Switch>

      <div className="container">
        <div className="cont">&nbsp;</div>
      </div>
    </div>
  );
}

export default withRouter(connect()(App));

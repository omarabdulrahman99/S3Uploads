import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import BlogNew from './blogs/BlogNew';
import BlogShow from './blogs/BlogShow';



class App extends Component{


  componentDidMount(){
    this.props.fetchUser();//this is why we're using connect down below with actions.
  }



  render(){

    return(
      <div className="container">
        <BrowserRouter>
          <div>
            <Header/>
              <Switch>
                <Route path="/blogs/new" component={BlogNew} />
                <Route exact path="/blogs/:id" component={BlogShow} />
                <Route path="/blogs" component={Dashboard} />
                <Route path="/" component={Landing} />
              </Switch>
          </div>
          </BrowserRouter>
      </div>

      )

  }

}


export default connect(null, actions)(App);
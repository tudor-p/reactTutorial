//purpose of this exercise is to use the React router. 

import React, { Component } from 'react'

// this is the central app. Components are imported below, each 'page' having its own JS file:

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

// the Navbar here is just a <ul> list so you can switch between the pages. 
import Navbar from './components/Navbar'
import Post from './components/Post'

// this is the router itself. Route will also be used to specify the rout
import { BrowserRouter, Route } from 'react-router-dom' 



class App extends Component {
  render () {
      return (
        <BrowserRouter> {/* Becomes the principal tag and wraps everything in the return()*/}
          <div className="App">
              <Navbar /> 
              <Route exact path='/' component={Home} /> {/*"exact" is used here because the /About and /... act like subsets of /, so we'd see the "/" AND about pages */}
              <Route path='/About' component={About} />
              <Route path='/Contact' component={Contact} />
              <Route path='/:post_id' component={Post} />
          </div>
        </BrowserRouter>
      )
  }
}

export default App

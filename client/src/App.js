import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {Navbar} from './components/navbar.component';
import Home from './components/home.component';
import {About} from './components/about.component';
import {Contact} from './components/contact.component';
import Compose from './components/compose.component';
import {Footer} from './components/footer.component';
import Post from "./components/post.component";

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/compose' component={Compose} />
        <Route exact path='/post/:postId' component={Post} />
      </Switch>
      <Footer />
      {/* <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <p className="navbar-brand">DAILY JOURNAL</p>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li id="home"><a href="/">HOME</a></li>
            <li id="about"><a href="/about">ABOUT US</a></li>
            <li id="contact"><a href="/contact">CONTACT US</a></li>
          </ul>
        </div>
      </nav> */}
      {/* <div className="container">
        <h1>Home</h1>
        <p>
          Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.
        </p> */}
        {/* <h1>Day 1</h1>
        <p>
          Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.        
          <a href="/posts/<%=post._id%>">Read More</a>
        </p> */}

      {/* </div> */}

      {/* <div className="footer-padding"></div>
      <div className="footer">
        <p>Made with ❤️ by The App Brewery</p>
      </div> */}
    </div>
  );
}

export default App;

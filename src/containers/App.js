import React, { Component } from 'react';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Posts from '../components/Posts';
import Projects from '../components/Projects';
import About from '../components/About';
import posts from '../data/posts';
import projects from '../data/projects';

class App extends Component {
  
  render() {
    return (
      <main className="">
      <Header/>
      <Intro/>
      <Posts posts={posts}/>
      <Projects projects={projects}/>
      <About/>
      </main>
    );
  }
}

export default App;

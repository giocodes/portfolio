import React, { Component } from 'react';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Posts from '../components/Posts';
import Projects from '../components/Projects';
import About from '../components/About';
import posts from '../data/posts';
import projects from '../data/projects';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerClass: 'Header--Gone',
      light: true,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.addRef = this.addRef.bind(this);
    this.toggleLight = this.toggleLight.bind(this);
    this.PostDiv;
  }
  toggleLight() {
    const colors = this.state.light
      ? [
          { name: '--color1', value: '#4E4E4E' },
          { name: '--color2', value: '#7dbd22' },
          { name: '--color3', value: '#939393' },
          { name: '--color4', value: '#DAD9D7' },
          { name: '--color5', value: '#FDF8F4' },
          { name: '--background', value: 'url(../assets/background-dark.jpg)' },
        ]
      : [
          { name: '--color1', value: '#FDF8F4' },
          { name: '--color2', value: '#FF5A5F' },
          { name: '--color3', value: '#DAD9D7' },
          { name: '--color4', value: '#939393' },
          { name: '--color5', value: '#4E4E4E' },
          { name: '--background', value: 'url(../assets/background-dark.jpg)' },
        ];
    colors.forEach(item =>
      document.documentElement.style.setProperty(item.name, item.value),
    );
    this.setState({light: !this.state.light})
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  addRef(postRef) {
    this.PostDiv = postRef;
  }

  handleScroll() {
    console.log(window.pageYOffset);
    if (window.pageYOffset < 400) {
      this.setState({ headerClass: 'Header--Gone' });
    }
    if (window.pageYOffset > 400 && window.pageYOffset < 600) {
      this.setState({ headerClass: 'Header--Hidden' });
    }
    if (window.pageYOffset > 600) {
      this.setState({ headerClass: 'Header--Sticky' });
    }
  }
  render() {
    return (
      <main className="">
        <Header className="Header" toggleLight={this.toggleLight} top />
        <Header
          className={`Header ${this.state.headerClass}`}
          toggleLight={this.toggleLight}
        />
        <Intro />
        <Posts posts={posts} addRef={this.addRef} />
        <Projects projects={projects} />
        <About />
      </main>
    );
  }
}

export default App;

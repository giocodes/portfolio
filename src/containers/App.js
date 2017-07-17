import React, { Component } from 'react';
import './App.css';
import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';
import data from '../data/data.json';

const {profile, categories} = data;
class App extends Component {
  render() {
    return (
      <main className="flex">
        <LeftPanel profile={profile}/>
        <RightPanel categories={categories}/>
      </main>
    );
  }
}

export default App;

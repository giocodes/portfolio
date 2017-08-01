import React, { Component } from 'react';
import LeftPanel from '../components/LeftPanel/';
import RightPanel from '../components/RightPanel/';
import data from '../data/data.json';
import randomPalette from '../data/colors';

const { profile, categories } = data;
const phrases = [
  'Why so serious?',
  'Much better!',
  'Wow! 😎',
  'Daba dee, daba da',
  'Do that again!'
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: [0,0],
      pristine: true
    };
    this.newColors = this.newColors.bind(this);
  }
  newColors() {
    let palette = randomPalette(this.state.color);
    palette[1].forEach((color, idx) => {
      document.documentElement.style.setProperty(`--color${idx + 1}`, color);
    });
    this.setState({ color: palette[0], pristine: false });
  }
  render() {
    return (
      <main className="flex color4 bg-animate bg-color1">
        <LeftPanel profile={profile} />
        <RightPanel
          categories={categories}
          skills={profile.skills}
          newColors={this.newColors}
          phrase={phrases[this.state.color[0]]}
          pristine={this.state.pristine}
        />
      </main>
    );
  }
}

export default App;

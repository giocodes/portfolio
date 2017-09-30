import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Slider.css';

class Slider extends Component {
  componentDidMount() {
    let { words } = this.props;
    let value = 1;
    let start = () => {
      if (value >= words.length) {
        value = 0;
      }
      let hiddenBox = document.getElementsByClassName('Slider__Box--hide')[0];
      if (hiddenBox) {
        hiddenBox.remove();
      }
      let box = document.getElementsByClassName('Slider__Box')[0];
      let container = document.getElementsByClassName('Slider')[0];
      let newBox = document.createElement('div');
      newBox.classList.add('Slider__Box');
      newBox.innerHTML = words[value];
      container.appendChild(newBox);
      box.classList.add('Slider__Box--hide');
      value++;
    };

    window.setInterval(start, 4000);
  }
  render() {
    return (
      <div className="f1 secondary pt4 dark-gray Slider">
        <div className="Slider__Box">Javascript</div>
      </div>
    );
  }
}
Slider.propTypes = {
  words: PropTypes.array,
};

export default Slider;

import React, { Component } from 'react';
import './Home.css'
import './styleR.css'
import img from './home13.jpg'


class SlidingText extends Component {
  state = {
    animate: false,
  };

  componentDidMount() {
    this.setState({ animate: true });
  }

  render() {
    const { animate } = this.state;

    return (
      <div className={`text ${animate ? 'slide-in' : ''}`}>
        <div id="Home" style={{display:'flex',paddingTop:80}}>
       <div id="homeh1"><h2 style={{paddingLeft:0}}>HELLO</h2><br />  <h1>I am Aditi Gorde</h1><br/><h4>Software Developer</h4><br />
          <a href="#contact"><button type="button" class="btn btn-secondary">Work with me</button></a>
          <a href="#About"><button type="button" class="btn btn-secondary mx-5">More about me</button></a>
        </div>
      <div>
        <img style={{paddingTop:20, paddingLeft:80}} id = "cartoon" src={img} alt="ni dikhana" />
      </div>
    </div>
      </div>
    );
  }
}

export default SlidingText;

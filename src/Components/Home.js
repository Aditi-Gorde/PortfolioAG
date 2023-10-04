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
      <div className={`text ${animate ? 'slide-in' : ''}`}  style={{display:'flex',paddingTop:'5rem'}}>
        <div id="Home">
          <div id="homeh1"><h2 style={{paddingLeft:0}}>HELLO</h2><br /><h1>I am Aditi Gorde</h1><br/><h4>Software Developer</h4><br /><br />
              <a href="#contact"><button type="button" class="btn btn-secondary">Work with me</button></a>
              <a href="#About" ><button type="button" class="btn btn-secondary abtme ">More about me</button></a>
            </div>
        <div>
        <img className='img-fluid' style={{paddingTop:20, paddingLeft:80}} id = "cartoon" src={img} alt="ni dikhana" />
      </div>
    </div>
      </div>
    );
  }
}

export default SlidingText;

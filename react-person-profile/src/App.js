import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: 'John Doe',
      bio: 'A passionate web developer.',
      imgSrc: 'https://placekitten.com/200/200', // Replace with an actual image URL
      profession: 'Web Developer',
    },
    show: false,
    interval: null,
  };

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  componentDidMount() {
    this.setState({
      interval: setInterval(this.updateInterval, 1000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  updateInterval = () => {
    this.forceUpdate();
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, interval } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div className="Profile">
            <img src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Time since last mount: {Math.floor(interval / 1000)} seconds</p>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Nourhen Meddeb',
        bio: 'A passionate developer with experience in React and Node.js.',
        imgSrc: '/profile.jpg',
        profession: 'computer Engineering Student',
      },
      shows: false,
      mountedTime: null,
      timeInterval: 0,
    };
  }

  
  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  
  componentDidMount() {
    this.setState({ mountedTime: Date.now() });
    this.interval = setInterval(() => {
      this.setState({
        timeInterval: Math.floor((Date.now() - this.state.mountedTime) / 1000),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, shows, timeInterval } = this.state;
    return (
      <div className="App">
        <h1>Person Profile</h1>
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div>
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <div>
          <h3>Time since last component mounted: {timeInterval} seconds</h3>
        </div>
      </div>
    );
  }
}

export default App;
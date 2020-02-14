import React from "react";

import Header from "./components/Header";
import PlayerCard from "./components/PlayerCard";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      name: '',
      country: ''
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res.data);
        this.setState({
          data: res.data,
          name: res.data.name,
          country: res.data.country
        });
      })
      .catch(err => console.log(err, 'axios error: '));
  }
  render() {
    return (
      <div className="App">       
      <Header />
      <div className = 'main-container'> 
      <div className = 'heading-container'>
        <h2>Players</h2> 
      </div>
          <PlayerCard
            key = {this.state.key}
            data={this.state.data}
            name={this.state.name}
            country={this.state.country}
          />

      </div>
    </div>
    );
  }
}

export default App;

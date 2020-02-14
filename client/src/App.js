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
    console.log("Component did mount!");

    axios.get("http://localhost:5000/api/players")
      .then(response => {
        console.log(response.data);
        this.setState({
          data: response.data,
          name: response.data.name,
          country: response.data.country
        });
      })
      .catch(err => console.log(err, 'axios call'));
  }
  render() {
    return (
      <div className="App">       
      <Header />
      <div className = 'main-container'> 
      Team
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

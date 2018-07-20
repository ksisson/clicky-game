import React, { Component } from 'react';
import ImageCard from "./components/ImageCard";
import './App.css';
import images from "./images.json"
import NavBar from './components/NavBar';


class App extends Component {

  state = {
    imageArray: images,
    guessesArray: [],
    score: 0,
    highscore: 0
  };

  imageClick = (id) => {
    var tempArray = []
    tempArray = this.state.guessesArray
    
    var score = this.state.score

    if (tempArray.includes(id) === false){
      tempArray.push(id)
      score++;
      this.setState({
        score: this.state.score + 1,
        guessesArray: tempArray
      });
    }
    else {
      this.setState({
        score: 0,
        guessesArray: []
      });

    }
    if (score > this.state.highscore){
      this.setState({ 
        highscore: score
      });
    }

    this.setState({
      imageArray: this.shuffle(this.state.imageArray)
    })
  }

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;



    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }

    

    return array;
  };
  

  render() {
    return (
      <div className="wrapper" >
        <NavBar
        score={this.state.score}
        highscore={this.state.highscore}
        />
          <div className="dogs">
          {this.state.imageArray.map(item => 
            <ImageCard
              imageClick={this.imageClick}
              src={item.src}
              id={item.id}
              key={item.id}>
            </ImageCard>)}
          </div>
      </div>
    );
      
  };
}


export default App;

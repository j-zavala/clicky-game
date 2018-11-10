//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import character from "./character.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    character,
    clickedCharacter: [],
    score: 0
  };

  //when you click on a card ... the character is taken out of the array
  imageClick = event => {
    const currentCharacter = event.target.alt;
    const CharacterAlreadyClicked =
      this.state.clickedCharacter.indexOf(currentCharacter) > -1;

    //if you click on a character that has already been selected, the game is reset and cards reordered
    if (CharacterAlreadyClicked) {
      this.setState({
        character: this.state.character.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedCharacter: [],
        score: 0
      });
      alert("You lose. Play again?");

      //if you click on an available character, your score is increased and cards reordered
    } else {
      this.setState(
        {
          character: this.state.character.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedCharacter: this.state.clickedCharacter.concat(
            currentCharacter
          ),
          score: this.state.score + 1
        },
        //if you get all 12 character correct you win and game is reset        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              character: this.state.character.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clickedCharacter: [],
              score: 0
            });
          }
        }
      );
    }
  };

  //the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.character.map(character => (
            <FriendCard
              imageClick={this.imageClick}
              id={character.id}
              key={character.id}
              image={character.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
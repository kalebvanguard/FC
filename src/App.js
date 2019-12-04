import React from 'react';
import Cards from './Cards';
import CardForm from './CardForm';
import { Container,  Button, Icon, Segment, } from 'semantic-ui-react';
import './App.css';

class App extends React.Component {
  state = {
    cards: [
      {id:1, question:"Question 1", answer: "Answer 1"},
      {id:2, question:"Question 2", answer: "Answer 2"},
      {id:3, question:"Question 3", answer: "Answer 3"}
    ],
    showForm: true
  };

  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };

  addCard = ({ question, answer }) => {
    let card  = { id: this.getId(), question, answer };
    this.setState({ cards: [...this.state.cards, card] });
  };

  removeCard = (id) => {
    const cards = this.state.cards.filter( card => {
      if (card.id !== id)
      return card;
    });
   
    this.setState({ cards });
  };

  toggleForm = () => this.setState({ showForm: !this.state.showForm })

  render() {
    const { cards } = this.state
    
    return (
      <Container style={{ paddingTop: "2rem" }}>
        <h1> React Flashcards </h1>
        <Segment basic>
          <Button color="blue" onClick={ this.toggleForm }>
            <Icon name={ this.state.showForm ? "angle double up" : "angle double down"}/>
          </Button>
            { this.state.showForm ? <CardForm addCard={ this.addCard }/> : null}
        </Segment>
        <Cards 
          cards={ cards }
          // showNextCard={this.boundShowNextCard}
          // showPrevCard = {this.boundShowPrevCard}
          // currentCard={this.state.currentCard}
          removeCard={ this.removeCard }
        />
      </Container>
    );
  }
};

export default App;

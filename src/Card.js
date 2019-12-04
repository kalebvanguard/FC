import React from 'react';
import { Button, Container, } from "semantic-ui-react";


class Card extends React.Component {
  state = {
    showAnswer: false
  }

  toggleCard = () => {
    this.setState({showAnswer: !this.state.showAnswer});
  };

  render() {
    const content = this.state.showAnswer ? this.props.answer : this.props.question
    return (
      <Container onClick={this.toggleCard}>
        <h2>{content}</h2>
      <div>
        {/* add arrow function in beginning to avoid this event from auto firing, instead of firing when you click the button. Your app/browser will break if you don't */}
        <Button color="red" onClick={() => this.props.removeCard(this.props.id) }>
          Delete
        </Button>
        </div>
      </Container>
    )
  }
};

export default Card;
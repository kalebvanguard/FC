import React from 'react';
import Card from './Card';
import { Grid } from 'semantic-ui-react';

const Cards = ({ cards, removeCard }) => (
  <Grid>
      {
        cards.map( card => ( 
          //define new prop for remove contact and pass it removeContact prop(remember this removeContact prop is a function defined in App.js)
          <Card key={card.id} {...card} removeCard={removeCard}/>
        ))
      }
  </Grid>
)

export default Cards;
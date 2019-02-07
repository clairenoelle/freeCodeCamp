import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

class Card extends Component {

  state = { quote: '' }

  componentDidMount() {
    axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(response => this.setState({ quote: response.data }));
  }

  render() {
    return (
      <div className="Card">
        <div className="IconWrapper">
          <FontAwesomeIcon icon={ faQuoteLeft } size="lg" />
          <FontAwesomeIcon icon={ faQuoteRight } size="lg" id="QR" />
        </div>
        <div className="AssetsWrapper">
          <p className="CardText" id="Quote">
            { this.state.quote }
          </p>
          <footer className="Footer">
            <FontAwesomeIcon icon={ faTwitter } size="md" />
            <button className="btn btn-primary">Get More Ron</button>
          </footer>
        </div>
      </div>
    );
  }
}

export default Card;

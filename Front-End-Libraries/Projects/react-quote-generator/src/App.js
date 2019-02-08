import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { quote: '' };
    this.handleClick = this.handleClick.bind(this);
  }
  


  componentDidMount() {
    axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(response => this.setState({ quote: response.data }));
  }

  handleClick() {
    setTimeout( () => {
      axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(response => this.setState({ quote: response.data }));
    }, 2500);
  }

  render() {
    return (
      <div className="Card">
        <div className="Inner">
          <div className="IconWrapper">
            <FontAwesomeIcon icon={ faQuoteLeft } className="Icon" />
            <FontAwesomeIcon icon={ faQuoteRight } className="Icon" id="QuoteRight" />
          </div>
          <p className="CardText" id="Quote">
            { this.state.quote }
          </p>
          <footer className="Footer">
            <FontAwesomeIcon icon={ faTwitter } id="Twitter" />
            <button className="btn" onClick={this.handleClick}>Get More Ron</button>
          </footer>
        </div>
      </div>
    );
  }
}

export default Card;

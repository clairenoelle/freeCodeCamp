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
    this.twitterClick = this.twitterClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  


  componentDidMount() {
    axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(response => this.setState({ quote: response.data }));
  }

  twitterClick() {
    let twitterLink = "http://twitter.com/intent/tweet?text=" + this.state.quote;
    window.open(twitterLink, "_blank");
  }

  handleClick() {
      axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(response => this.setState({ quote: response.data }));
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
            <FontAwesomeIcon icon={ faTwitter } id="Twitter" onClick={this.twitterClick} />
            <button className="btn" onClick={this.handleClick}>Get More Ron Swanson</button>
          </footer>
        </div>
      </div>
    );
  }
}

export default Card;

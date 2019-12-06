import React, { Component } from 'react';

const quotes = [
    'you got this',
    'do something great',
    'punch today in the face',
    'never stop', 
    'punch today in the face', 
    'whatever it takes'
];

export default class Quotes extends Component {

    state = {
        random: '',
    }

    componentDidMount() {
       setInterval(() => this.getRandomQuote(), 3000);
    }

    getRandomQuote = () => {
        let random = quotes[Math.floor(Math.random() * quotes.length)];
        this.setState({ random });
    }

    render() {
        return (
            <div id="welcome-quote-container">
                <h3 className="random-quote">{this.state.random}</h3>
            </div>
        )
    }
}

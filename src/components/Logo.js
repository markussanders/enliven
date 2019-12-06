import React, { Component } from 'react';
import Quotes from './Quotes';

export default class Logo extends Component {
    render() {
        return (
            <div id="logo">
                <div id="enliven-color-div">
                    <h2 id="en-n">en<span id="live">live</span>n</h2>
                    <Quotes/>
                </div>
            </div>
        )
    }
}

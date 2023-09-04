import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {

    state = {
        query: "India",
    }
    handleCallback = (q) => {
        this.setState({ query: q })
    }

    render() {
        return (
            <div>
                <Navbar parentCallback={this.handleCallback} />
                <News query={this.state.query} />
            </div>
        )
    }
}

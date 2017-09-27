import React, { Component } from 'react';
import Header from '../components/Header';

export default class Broken extends Component {
    render() {
        return (<div>
            <Header />
            <div className="container">
                <h1>404</h1>
            </div>
        </div>)
    }
}
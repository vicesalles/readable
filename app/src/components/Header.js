import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
   
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-3">Readeable</h1>
                    <p className="display-4">{this.props.subtitle || ''}</p>
                    <p className="lead">Your comments matter</p>
                    <p className="lead">
                        <Link to="/"><a className="btn btn-success btn-lg" href="./index.html" role="button">Home</a></Link>
                        &nbsp;
                        <Link className="btn btn-success btn-lg" to="/edit/new">New Post</Link>
                    </p>
                </div>
            </div>
        );
    }
}
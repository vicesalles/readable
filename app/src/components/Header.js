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
                        <Link to="/edit/new"><a className="btn btn-success btn-lg" href="./post.html" role="button">New Post</a></Link>
                    </p>
                </div>
            </div>
        );
    }
}
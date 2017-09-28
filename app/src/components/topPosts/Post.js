import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Post extends Component {
    render() {
        return (
            <Link to={'/post/' + this.props.post.id} className="list-group-item list-group-item-action">

                <div className="row">
                    <div className="container">{this.props.post.title}</div>
                </div>
                <div className="row">
                    <div className="container">

                        <span className="badge badge-primary">{this.props.post.category}</span>
                        &nbsp;
                        <span className="badge badge-info">{this.props.post.votes} Votes</span>
                        <span className="badge badge-light">{this.props.post.date}</span>

                    </div>
                </div>
            </Link>
        )
    }
}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as h from '../../utils/helpers'

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
                        <span className="badge badge-info">{this.props.post.voteScore} Votes</span>
                        <span className="badge badge-light">{h.toDate(this.props.post.timestamp)}</span>

                    </div>
                </div>
            </Link>
        )
    }
}


import React, { Component } from 'react';

export default class CommentsItem extends Component {
    render() {
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="container">{this.props.comment || 'Dapibus ac facilisis in'}</div>
                </div>
                <div className="row">
                    <div className="container">
                        <span>
                            <span className="badge badge-success"><a href="#" className="pillbutton">UpVote</a></span>
                            &nbsp;
                            <span className="badge badge-danger"> <a href="#" className="pillbutton">downVote</a></span>
                            &nbsp;
                            <span className="badge badge-info">{this.props.votes || 'n'} Votes</span>
                            &nbsp;
                            <span className="badge badge-light">{this.props.date || '17:14 01/10/17'}</span>
                        </span>
                        |
                    <span>
                            <span className="badge badge-success"><a href="#" className="pillbutton">Edit</a></span>
                            &nbsp;
                            <span className="badge badge-danger"> <a href="#" className="pillbutton">delete</a></span>

                        </span>

                    </div>
                </div>
            </li>
        )
    }
}
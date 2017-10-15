import React, { Component } from 'react';
import * as utils from '../../utils/helpers';

export default class CommentsItem extends Component {
    render() {
        
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="container">{this.props.comment.body || 'Dapibus ac facilisis in'}</div>
                </div>
                <div className="row">
                    <div className="container">
                        <span>
                            <span className="badge badge-success"><a className="pillbutton">UpVote</a></span>
                            &nbsp;
                            <span className="badge badge-danger"> <a className="pillbutton">downVote</a></span>
                            &nbsp;
                            <span className="badge badge-info">{this.props.comment.voteScore || 'n'} Votes</span>
                            &nbsp;
                            <span className="badge badge-light">{utils.toDate(this.props.comment.timestamp) || '17:14 01/10/17'}</span>
                        </span>
                        |
                    <span>
                            <span className="badge badge-success"><a className="pillbutton">Edit</a></span>
                            &nbsp;
                            <span className="badge badge-danger"> <a className="pillbutton">delete</a></span>

                        </span>

                    </div>
                </div>
            </li>
        )
    }
}
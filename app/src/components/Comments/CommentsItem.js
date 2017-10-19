import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import * as utils from '../../utils/helpers';

class CommentsItem extends Component {
    render() {

        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="container">{this.props.comment.body || 'Dapibus ac facilisis in'}</div>
                </div>
                <div className="row">
                    <div className="container">
                        <span>
                            <span className="badge badge-success">
                                <a onClick={()=>this.props.submitVote(this.props.comment.id,'upVote')} className="pillbutton clicable">UpVote</a>
                            </span>
                            &nbsp;
                            <span className="badge badge-danger">
                                <a onClick={()=>this.props.submitVote(this.props.comment.id,'downVote')} className="pillbutton clicable">downVote</a>
                            </span>
                            &nbsp;
                            <span className="badge badge-info">{this.props.comment.voteScore || 'n'} Votes</span>
                            &nbsp;
                            <span className="badge badge-light">{utils.toDate(this.props.comment.timestamp) || '17:14 01/10/17'}</span>
                        </span>
                        |
                    <span>
                            <span className="badge badge-success">
                                <a className="pillbutton">Edit</a>
                            </span>
                            &nbsp;
                            <span className="badge badge-danger">
                                <a className="pillbutton">delete</a>
                            </span>

                        </span>

                    </div>
                </div>
            </li>
        )
    }
}

function mapStateToProps({ comment }) {

}

function mapDispatchToProps(dispatch) {
    submitVote: (id,vote) => dispatch(this.props.voteComment(id,vote))
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentsItem));
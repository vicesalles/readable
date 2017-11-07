import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as utils from '../../utils/helpers';
import { wannaEditComment, voteComment, deleteComment } from '../../actions';
import {FaUser,FaUserSecret,FaThumbsUp,FaThumbsDown} from 'react-icons/lib/fa/';

class CommentsItem extends Component {

    delete = (id,parentId) => {
        //Delete this comment
        this.props.delete(id,parentId);
    }

    edit = () =>{
        console.log('wanna edit');
        this.props.edit(this.props.id);
    }

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
                                <a onClick={() => this.props.submitVote(this.props.comment.id, 'upVote')} className="pillbutton clicable"><FaThumbsUp/></a>
                            </span>
                            <span className="badge badge-danger breath">
                                <a onClick={() => this.props.submitVote(this.props.comment.id, 'downVote')} className="pillbutton clicable"><FaThumbsDown/></a>
                            </span>
                           <span className="badge badge-info breath">{this.props.comment.voteScore || '0'} Votes</span>
                            <span className="spacer">
                                    <span className="badge badge-light">
                                        {this.props.comment.author? <FaUser/>:<FaUserSecret/>}
                                        &nbsp;
                                        {this.props.comment.author}
                                    </span>
                            </span>
                            <span className="badge badge-light">{utils.toDate(this.props.comment.timestamp) || '17:14 01/10/17'}</span>
                        </span>
                        
                    <span className="spacer">
                            <span className="badge badge-success">
                                <a onClick={()=>this.edit()} className="pillbutton clicable">Edit</a>
                            </span>
                            
                            <span className="badge badge-danger breath">
                                <a onClick={() => this.delete(this.props.comment.id, this.props.comment.parentId)} className="pillbutton clicable">delete</a>
                            </span>

                        </span>

                    </div>
                </div>
            </li>
        )
    }
}

function mapStateToProps({ comment }, ownProps) {
    return {
        ownProps
    }
}

function mapDispatchToProps(dispatch) {
    return {
        submitVote: (id, vote) => dispatch(voteComment(id, vote)),
        delete: (id,parentId) => dispatch(deleteComment(id,parentId)),
        edit: (id)=> dispatch(wannaEditComment(id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentsItem));
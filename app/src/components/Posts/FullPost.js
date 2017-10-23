import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { votePost, wannaComment } from '../../actions';
import * as utils from '../../utils/helpers';
import * as api from '../../utils/api';

class FullPost extends Component {

    state = {
        commenting: false
    }

    vote = (v) => {
        const id = this.props.match.params.id;
        this.props.submitVote(id, v);
    }

    render() {
        // console.log('props',this.props.post);
        return (
            <div className="row">

                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-10">
                                    <h1>{this.props.post.title || 'Title'}</h1>
                                </div>
                                <div className="col ">
                                    <div className="container">
                                        <span className="badge badge-success">
                                            <a className="pillbutton">Edit</a></span>
                                        &nbsp;
                                        <span className="badge badge-danger">
                                            <a className="pillbutton">delete</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-body">
                            <p>{this.props.post.body || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus dolor fermentum, placeratsapien hendrerit.'}</p>

                        </div>
                        <div className="card-footer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-8">
                                        <a onClick={() => this.props.wannaComment()} className="btn btn-success clicable">Comment</a>
                                        &nbsp;
                                        <a onClick={() => this.vote('upVote')} className="btn btn-success clicable">UpVote</a>
                                        &nbsp;
                                        <a onClick={() => this.vote('downVote')} className="btn btn-success clicable">DownVote</a>
                                    </div>
                                    <div className="col-4">

                                        <span className="badge badge-primary">{this.props.post.category || 'Category'}</span>
                                        &nbsp;
                                        <span className="badge badge-info">{this.props.post.voteScore || '0'} Votes</span>
                                        &nbsp;
                                        <span className="badge badge-light">{utils.toDate(this.props.post.timestamp) || '17:14 01/10/17'}</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps({ post }) {
    return { post: post.currentPost }
}

function mapDispatchToProps(dispatch) {
    return {
        submitVote: (id, vote) => dispatch(votePost(id, vote)),
        wannaComment: () => dispatch(wannaComment())
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FullPost));


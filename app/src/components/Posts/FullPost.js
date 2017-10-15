import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as utils from '../../utils/helpers';
import * as api from '../../utils/api';

class FullPost extends Component {

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
                                        <span className="badge badge-success"><a className="pillbutton">Edit</a></span>
                                        &nbsp;
                                        <span className="badge badge-danger"> <a className="pillbutton">delete</a></span>
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
                                        <a className="btn btn-success">Comment</a>
                                        &nbsp;
                                        <a className="btn btn-success">UpVote</a>
                                        &nbsp;
                                        <a className="btn btn-success">DownVote</a>
                                    </div>
                                    <div className="col-4">

                                        <span className="badge badge-primary">{this.props.post.category || 'Category'}</span>
                                        &nbsp;
                                        <span className="badge badge-info">{this.props.post.voteScore || 'n'} Votes</span>
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

function mapStateToProps({ post, comment }) {
    return { post, comment }
}

function mapDispatchToProps(dispatch) {
    return {
        // setPosts: (data) => dispatch(getPosts(data))
    }
}

export default FullPost;

//export default withRouter(connect(mapStateToProps)(FullPost));
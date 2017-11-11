import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as h from '../../utils/helpers';
import {FaUser,FaUserSecret,FaThumbsUp,FaThumbsDown} from 'react-icons/lib/fa/';
import{connect} from 'react-redux';
import {votePost,deletePost,wannaEditPost,getPosts,getCurrentPost} from '../../actions';
import {getComments} from '../../utils/api';
import {withRouter} from 'react-router-dom';

class Post extends Component {

    state={
        nComments:'',
        refresh : false
    }

    /**
     * @description Vote the given post
     */
    submitVote = (id,vote) =>{            
        this.props.submitVote(id, vote);        
    }

    
    /**
     * @description Edit the given post.
     */
    edit = (id) =>{
        //Enabling edition mode
        this.props.edit()
        //Navigate to the edition view
        this.props.history.push(`/post/${id}/edit`);
    }

    /**
     * @description Number of comments for this post     * 
     */
    nComments = () =>{
        getComments(this.props.post.id).then((r)=>{
            const n = r.length
            this.setState({nComments:n});
        })
    }

    componentDidMount(){
        
        //Getting the number of comments
        this.nComments();
    }

    render() {
        
        return (
            <div className="list-group-item list-group-item-action">

                <div className="row">
                    <Link className="postItemTitle" to={`/${this.props.post.category}/${this.props.post.id}`}>  
                        <div className="container clicable">{this.props.post.title}</div>
                    </Link>
                </div>
                <div className="row">
                    <div className="container">
                        
                        <span className="badge badge-light">
                            {this.props.post.author? <FaUser/>:<FaUserSecret/>}
                            &nbsp;
                            {this.props.post.author}
                        </span>        
                        <span className="spacer">                                        
                            <span className="badge badge-light">{this.state.nComments} comments</span>
                       </span>
                        <span className="spacer">
                            <span className="badge badge-success clicable">  
                                <a onClick={() => this.submitVote(this.props.post.id, 'upVote')} className="pillbutton clicable"><FaThumbsUp/></a>
                            </span>
                                
                            <span className="badge badge-danger breath clicable">
                                <a onClick={() => this.submitVote(this.props.post.id, 'downVote')} className="pillbutton clicable"><FaThumbsDown/></a>
                            </span>
                                
                            <span className="badge badge-info breath">{this.props.post.voteScore} Votes</span>  
                        </span>
                        <span className="spacer">
                           
                            <span className="badge badge-success">
                                <a onClick={()=>this.edit(this.props.post.id)} className="pillbutton clicable">Edit</a>
                            </span>
                            <span className="badge badge-danger breath">
                                <a onClick={() => this.props.delete(this.props.post.id, this.props.post.category)} className="pillbutton clicable">Delete</a>
                            </span>

                        </span>
                
                    </div>
                </div>
                <div className="row">
                    <div className="container">
                        <span className="badge badge-primary">{this.props.post.category}</span>
                        <span className="badge badge-light breath">{h.toDate(this.props.post.timestamp)}</span>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ post }, ownProps) {
    return {
        ownProps
    }
}

function mapDispatchToProps(dispatch) {
    return {
        submitVote: (id, vote) => dispatch(votePost(id, vote)),
        delete: (id,category) => dispatch(deletePost(id,category)),
        edit: (id)=> dispatch(wannaEditPost())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));


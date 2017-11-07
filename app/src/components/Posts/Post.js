import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as h from '../../utils/helpers';
import {FaUser,FaUserSecret,FaThumbsUp,FaThumbsDown} from 'react-icons/lib/fa/';
import{connect} from 'react-redux';
import {votePost} from '../../actions';
import {getComments,getPosts,deletePost,editPost} from '../../utils/api';
import {withRouter} from 'react-router-dom';

class Post extends Component {

    state={
        nComments:'',
        refresh : false
    }

    submitVote = (id,vote) =>{            
        this.props.submitVote(id, vote);        
    }

    delete = (id,parentId) => {
        //Delete this comment
        this.props.delete(id,parentId);
    }

    edit = () =>{
        console.log('wanna edit');
        this.props.edit(this.props.id);
    }

    nComments = () =>{
        getComments(this.props.post.id).then((r)=>{
            const n = r.length
            this.setState({nComments:n});
        })
    }

    componentDidMount(){
        this.nComments();
    }

    render() {
        
        return (
            <div className="list-group-item list-group-item-action">

                <div className="row">
                    <Link className="postItemTitle" to={'/post/' + this.props.post.id}>  
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
                                <a onClick={()=>this.edit()} className="pillbutton clicable">Edit</a>
                            </span>
                            <span className="badge badge-danger breath">
                                <a onClick={() => this.delete(this.props.comment.id, this.props.comment.parentId)} className="pillbutton clicable">delete</a>
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
        delete: (id,parentId) => dispatch(deletePost(id,parentId)),
        edit: (id)=> dispatch(editPost(id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {getCurrentPost} from '../actions';

import Header from '../components/Header';
import FullPost from '../components/Posts/FullPost';
import CategoriesCard from '../components/categories/CategoriesCard';
import TopPosts from '../components/Posts/TopPosts';
import Comments from '../components/Comments/Comments';
import NewComment from '../components/Forms/NewComment';
import EditComment from '../components/Forms/EditComment'

class Post extends Component {

  
    componentDidMount() {

        const postId = this.props.match.params.id;
        this.props.getCurrentPost(postId);
                
    }

    render() {
        return (<div className="container-fluid">
            <Header />
            <FullPost />
            <div className="row row-space">
                <Comments />               
            </div>
            <div className="row row-space">        
                {this.props.comment.commenting===true?<NewComment/>:''}
                {this.props.comment.edit.editing===true?<EditComment/>:''}
            </div>    
            <div className="row">
                    <CategoriesCard />                    
                </div>       
        </div>);
    }
}

function mapStateToProps({ post, comment }) {
    return { post, comment }
}

function mapDispatchToProps(dispatch) {
    return {
        getCurrentPost: (data) => dispatch(getCurrentPost(data))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
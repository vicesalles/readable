import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as utils from '../utils/helpers';
import * as api from '../utils/api';

import Header from '../components/Header';
import FullPost from '../components/Posts/FullPost';
import CategoriesCard from '../components/categories/CategoriesCard';
import TopPosts from '../components/Posts/TopPosts';
import Comments from '../components/Comments/Comments';

class Post extends Component {

    componentDidMount(){
        const postId = this.props.match.params.id;
        this.props.setCurrentPost(postId);
    }
    
    render() {
        return (<div className="container-fluid">
            <Header />
            <FullPost />
            <div className="row row-space">
                <Comments />
            </div>
            <div className="row row-space">
                <CategoriesCard />
                <TopPosts />
            </div>
        </div>);
    }
}

function mapStateToProps({ post, comment }) {
    return { post, comment }
}

function mapDispatchToProps(dispatch) {
    return {
        setCurrentPost : (data) => dispatch(this.props.setCurrentPost(data))    
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
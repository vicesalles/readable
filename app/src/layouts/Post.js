import React, { Component } from 'react';
import Header from '../components/Header';
import FullPost from '../components/Posts/FullPost';
import CategoriesCard from '../components/categories/CategoriesCard';
import TopPosts from '../components/Posts/TopPosts';
import Comments from '../components/Comments/Comments';

export default class Post extends Component {
    render() {
        return (<div className="container-fluid">
            <Header />
            <FullPost />
            <div className="row row-space">
            <Comments/>
            </div>
            <div className="row row-space">
                <CategoriesCard />
                <TopPosts />
            </div>
        </div>);
    }
}
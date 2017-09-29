import React, { Component } from 'react';
import Header from '../components/Header';
import FullPost from '../components/Posts/FullPost';
import CategoriesCard from '../components/categories/CategoriesCard';
import TopPosts from '../components/Posts/TopPosts';

export default class Post extends Component {
    render() {
        return (<div className="container-fluid">
            <Header />
            <FullPost />
            <div className="row row-space">
            
            </div>
            <div className="row row-space">
                <CategoriesCard />
                <TopPosts />
            </div>
        </div>);
    }
}
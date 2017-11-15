import React, { Component } from 'react';
import Header from '../components/Header';
import AllThePosts from '../components/Posts/AllThePosts';
import CategoriesCard from '../components/categories/CategoriesCard';
import TopPosts from '../components/Posts/TopPosts';

export default class Category extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header subtitle={`Category ${this.props.match.params.category}`} />
                <div className="row">
                    <AllThePosts title={`Category ${this.props.match.params.category}`} />
                </div>
                <div className="row row-space">
                    <CategoriesCard />
                    <TopPosts />
                </div>
            </div>
        );
    }
}
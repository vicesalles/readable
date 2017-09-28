import React, { Component } from 'react';
import Header from '../components/Header';
import CategoriesCard from '../components/categories/CategoriesCard';
import TopPosts from '../components/topPosts/TopPosts';


export default class Default extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <div className="row">
                    <CategoriesCard />
                    <TopPosts />
                </div>
            </div>
        );
    }
}
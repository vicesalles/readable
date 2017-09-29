import React, { Component } from 'react';
import Header from '../components/Header';
import AllThePosts from '../components/Posts/AllThePosts';

export default class Category extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header subtitle="Category X" />
                <div className="row">
                    <AllThePosts title="Category X" />
                </div>
            </div>
        );
    }
}
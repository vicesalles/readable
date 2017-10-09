import React, { Component } from 'react';
import Header from '../components/Header';
import AllThePosts from '../components/Posts/AllThePosts';

export default class Category extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header subtitle={`Category ${this.props.match.params.id}`} />
                <div className="row">
                    <AllThePosts title={`Category ${this.props.match.params.id}`} />
                </div>
            </div>
        );
    }
}
import React, { Component } from 'react';
import Header from '../components/Header';
import FullPost from '../components/Posts/FullPost';

export default class Post extends Component {
    render() {
        return (<div>
            <Header />
            <FullPost />
        </div>);
    }
}
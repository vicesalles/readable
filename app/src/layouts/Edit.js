import React, { Component } from 'react';
import Header from '../components/Header';
import NewPost from '../components/Forms/NewPost';

export default class Edit extends Component {
    render() {
        return (<div>
            <Header />
            <NewPost />
        </div>);
    }
}
import React, { Component } from 'react';
import Header from '../components/Header';
import CategoriesCard from'../components/categories/CategoriesCard';
export default class Default extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <div className="row">
                    <CategoriesCard/>
                </div>
            </div>
        );
    }
}
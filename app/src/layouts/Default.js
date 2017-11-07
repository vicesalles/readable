import React from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../components/Header';
import CategoriesCard from '../components/categories/CategoriesCard';
import TopPosts from '../components/Posts/TopPosts';
import AllThePosts from '../components/Posts/AllThePosts';

//Default View
function Default(){
   
        return (
            <div className="container-fluid">
                <Header />
                <div className="row">
                    <CategoriesCard />
                    <TopPosts />
                </div>
              
                <div className="row row-space">
                    <AllThePosts title="All the Posts" />
                </div>
            </div>
        );

}

export default withRouter(Default);
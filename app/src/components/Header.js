import React from 'react';
import { Link } from 'react-router-dom';

//Page Header
export default function Header(props) {
       
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-3">Readeable</h1>
                    <p className="display-4">{props.subtitle || ''}</p>
                    <p className="lead">Your comments matter</p>
                    <p className="lead">
                        <Link className="btn btn-success btn-lg" to="/">Home</Link>
                        &nbsp;
                        <Link className="btn btn-success btn-lg" to="/edit/new">New Post</Link>
                    </p>
                </div>
            </div>
        );
   
}
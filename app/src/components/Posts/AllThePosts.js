import React, { Component } from 'react';
import Post from './Post';

export default class AllThePosts extends Component {

    example = {
        title: "Is Bruno legit?",
        id: "44",
        category: "bob",
        date: "17:14 1/10/17",
        votes: "15"
    }

    render() {
        return (
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col">
                                <h4 className="capital">{this.props.title}</h4>
                            </div>
                            <div className="col">
                                <ul className="nav nav-pills card-header-pills">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">Popular
                                                <span className="badge badge-secondary">up</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Old
                                                <span className="badge badge-secondary">up</span></a>
                                    </li>

                                </ul>
                            </div>
                        </div>


                    </div>


                    <ul className="list-group list-group-flush">
                        <Post post={this.example}/>
                    </ul>
                    <div className="card-body">
                        <div className="container">
                            <a href="#" className="btn btn-success">Comment Now</a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
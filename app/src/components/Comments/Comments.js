import React, { Component } from 'react';
import CommentsItem from './CommentsItem';

export default class Comments extends Component {
    render() {
        return (
            <div className="col">
                <div className="card">
                    <div className="card-header">Comments</div>
                    <ul className="list-group list-group-flush">
                        <CommentsItem />
                    </ul>
                    <div className="card-body">
                        <div className="row">
                            <a className="btn btn-success btn-lg" href="#" role="button">Comment</a>
                        </div>
                    </div>

                </div>

            </div>

        )
    }
}
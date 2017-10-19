import React, { Component } from 'react';
import CommentsItem from './CommentsItem';
import { connect } from 'react-redux';

export default class Comments extends Component {
    parseComments = (array) =>{

     /*   const res = array.map((c)=>{
            return <CommentsItem key={c.id} comment={c} />
        })

        return res;*/
    }
    render() {
        return (
            <div className="col">
                <div className="card">
                    <div className="card-header">Comments</div>
                    <ul className="list-group list-group-flush">
                        {this.parseComments()}
                    </ul>
                    <div className="card-body">
                        <div className="row">
                            <a className="btn btn-success btn-lg clicable" role="button">Comment</a>
                        </div>
                    </div>

                </div>

            </div>

        )
    }
}
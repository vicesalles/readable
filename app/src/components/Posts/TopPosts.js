import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';

class TopPosts extends Component {
    
    example = {
        title:"Is Bruno legit?",
        id:"44",
        category:"bob",
        date:"17:14 1/10/17",
        votes: "15"
    }

    render() {
        return (
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        <h4>Top Posts</h4>
                    </div>

                    <ul className="list-group list-group-flush">
                    <Post post={this.example}/>
                    </ul>
                </div>
            </div>
        )
    }
}


export default connect()(TopPosts);
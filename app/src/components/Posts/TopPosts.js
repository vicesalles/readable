import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import { getPosts } from '../../actions'
import * as helpers from '../../utils/helpers';

class TopPosts extends Component {
  
    render() {
        return (
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        <h4>Top Posts</h4>
                    </div>

                    <ul className="list-group list-group-flush">
                        {this.props.posts.map((el) => { return <Post id={el.id} post={el} /> })}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ post }) {

    const posts = post.posts;
    const myPosts = helpers.filter(posts, 'voteScore', 'desc', 3);
    
    return {
        posts: myPosts
    }
}

export default connect(mapStateToProps)(TopPosts);
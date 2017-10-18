import React, { Component } from 'react';
import Post from './Post';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPosts } from '../../actions';
import * as api from '../../utils/api';

class AllThePosts extends Component {

    state = {}

    /**
     * This method returns a properly parsed array of 'Post' Components
     * @param answer array
     * @return array of post components
     */
    parsePosts = (answer) => {

        //Turning the response Object into an Array
        const array = Object.values(answer);
        //Turning the resulting objects array into a Post Component Array
        return array.map((post) => {
            return <Post key={post.id} post={post} />
        });

    }


    componentDidMount() {
        this.props.setPosts(this.props.match.params.id || "");
        console.log('component props', this.props);
        console.log(this.props.post.posts);
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
                                        <a className="nav-link active">Popular
                                                <span className="badge badge-secondary">up</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">Old
                                                <span className="badge badge-secondary">up</span></a>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </div>

                    <ul className="list-group list-group-flush">
                        {this.parsePosts(this.props.post.posts)}
                    </ul>
                    <div className="card-body">
                        <div className="container">
                            <a className="btn btn-success">Comment Now</a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

function mapStateToProps({ post, comment }) {
    return { post, comment }
}

function mapDispatchToProps(dispatch) {
    return {
        setPosts: (data) => dispatch(getPosts(data))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllThePosts));
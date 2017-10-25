import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPosts } from '../../actions';
import Post from './Post';
import FilterTab from '../FilterTab';
import * as h from '../../utils/helpers';


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
                                        <FilterTab title="Popular" />
                                    </li>
                                    <li className="nav-item">
                                        <FilterTab title="Old" />
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </div>

                    <ul className="list-group list-group-flush">
                        {this.parsePosts(this.props.posts)}
                    </ul>
                    <div className="card-footer">
                        <div className="container">

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

function mapStateToProps({ post }) {

    // He de filtrar els resultats i fer-los sensibles als canvis de filtre.
    const posts = h.filter(post.posts, post.filter.f, post.filter.d, 0);

    return { posts }
}

function mapDispatchToProps(dispatch) {
    return {
        setPosts: (data) => dispatch(getPosts(data))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllThePosts));
import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import * as api from '../../utils/api';

class AllThePosts extends Component {

    example = {
        title: "Is Bruno legit?",
        id: "44",
        category: "bob",
        date: "17:14 1/10/17",
        votes: "15"
    }

    state = {
        posts: [<Post key={this.example.id} post={this.example}/>]
    }



    getPosts = (q = "") => {
        /*   api.getPosts(q).then((posts) => {
   
               let thePosts = posts.map((post) => <Post post={post} />);
   
               this.setState({ thePosts });
           });*/
        return [{
            "8xf0y6ziyjabvozdd253nd": {
                id: '8xf0y6ziyjabvozdd253nd',
                timestamp: 1467166872634,
                title: 'Udacity is the best place to learn React',
                body: 'Everyone says so after all.',
                author: 'thingtwo',
                category: 'react',
                voteScore: 6,
                deleted: false
            },
            "6ni6ok3ym7mf1p33lnez": {
                id: '6ni6ok3ym7mf1p33lnez',
                timestamp: 1468479767190,
                title: 'Learn Redux in 10 minutes!',
                body: 'Just kidding. It takes more than 10 minutes to learn technology.',
                author: 'thingone',
                category: 'redux',
                voteScore: -5,
                deleted: false
            }
        }]
    }

    componentDidMount() {
        console.log(this.props.category);
        this.getPosts(this.props.category);
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
                        {this.state.posts}
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

function mapStateToProps({post,comment}){
    console.log(post);
    return{}
}

function mapDispatchToProps(){
    return{}
}

export default connect(mapStateToProps, mapDispatchToProps)(AllThePosts);
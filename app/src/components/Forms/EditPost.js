import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as hlp from '../../utils/helpers';
import { addPost } from '../../actions';

class NewPost extends Component {

    //State is used for handling Form
    state = {
        title: '',
        body: '',
        owner: '',
        category: "react"
    };

    /**
     * Submiting form method
     * @param Event e
     */
    submitForm = (e) => {

        e.preventDefault();

        //Creating the Post object
        let post = {};
        post.id = hlp.guid();
        post.timestamp = Date.now();
        post.category = this.state.category;
        post.title = this.state.title;
        post.body = this.state.body;
        this.state.owner === "" ? post.owner = "Anonymous" : post.owner = this.state.owner;

        //Dispatching addPost ACTION
        this.props.dispatch(addPost(post));

    }

    /**
     * Method for managing form/state relation
     * @param Event e
     * @param String field: Describes the updated fiel
     */

    valueChanged = (e, field) => {

        const value = e.target.value;
        this.setState({ [field]: value });

    }

    render() {
        //Checking if post has been posted
        if (this.props.post.gotPosted) {

            return (
                <div className="col">
                    <div className="container">
                        <div className="cont">&nbsp;</div>
                    </div>
                    <div className="card">
                        <div className="card-body">

                            <div className="card-block">
                                <div className="container">
                                    <h3>Your post is already public</h3>
                                    <Link className="btn btn-primary clicable" to="/">Go home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)

        } else {
            //Showing Posting Form
            return (

                <div className="col">
                    <div className="container">
                        <div className="cont">&nbsp;</div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-10">
                                    <h1>New Post</h1>
                                </div>
                            </div>
                        </div>

                        <div className="card-body">

                            <div className="card-block">
                                <div className="container">
                                    <form>
                                        <div className="form-group">
                                            <label>Post Title</label>
                                            <input type="text" onChange={(e) => this.valueChanged(e, 'title')} className="form-control" required placeholder="Enter title"
                                                value={this.state.title} />
                                        </div>
                                        <div className="form-group">
                                            <label>Category</label>
                                            <select onChange={(e) => this.valueChanged(e, 'category')} className="form-control">
                                                <option value="react">React</option>
                                                <option value="redux">Redux</option>
                                                <option value="udacity">Udacity</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Post</label>
                                            <textarea onChange={(e) => this.valueChanged(e, 'body')} className="form-control" rows="8" required
                                                placeholder="Your message here..."
                                                value={this.state.body}></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label>Author</label>
                                            <input onChange={(e) => this.valueChanged(e, 'owner')} type="text" className="form-control"
                                                placeholder="Enter your name"
                                                value={this.state.owner} />
                                        </div>
                                        <button onClick={this.submitForm} className="btn btn-primary clicable">Submit</button>
                                    </form>
                                </div>
                            </div>


                        </div>
                        <div className="card-footer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-8">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            );

        }

    }
}

function mapStateToProps({ post }) {
    return { post }
}

export default withRouter(connect(mapStateToProps)(NewPost));
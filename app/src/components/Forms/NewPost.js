import React, { Component } from 'react';
import * as api from '../../utils/api';
import * as hlp from '../../utils/helpers';

export default class NewPost extends Component {
    state = {};
    submitForm = (e) => {

        e.preventDefault();

        const ref = this.refs;

        let post = {};

        //let myData = new FormData();

        post.id = hlp.guid();
        post.timestamp = Date.now();
        post.category = ref.category.value;
        post.title = ref.title.value;
        post.body = ref.body.value;
        ref.owner.value === "" ? post.owner = "Anonymous" : post.owner = ref.owner.value;

        api.postPost(post);

    }
    render() {
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
                                        <input type="text" className="form-control" ref="title" required placeholder="Enter title" />
                                    </div>
                                    <div className="form-group">
                                        <label>Category</label>
                                        <select className="form-control" ref="category">
                                            <option value="react">React</option>
                                            <option value="redux">Redux</option>
                                            <option value="udacity">Udacity</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Post</label>
                                        <textarea ref="body" className="form-control" rows="8" required placeholder="Your message here..."></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Author</label>
                                        <input type="text" className="form-control" ref="owner" placeholder="Enter your name" />
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
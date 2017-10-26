import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { editPost } from '../../actions';

class EditPost extends Component {

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

        //Post ID
        const id = this.props.match.params.id;

        //Creating the Post object
        let post = {};

        post.title = this.state.title;
        post.body = this.state.body;
        

        //Dispatching addPost ACTION
        this.props.dispatch(editPost(id,post));

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

    componentDidMount() {
        this.setState({
            title: this.props.p.title,
            body: this.props.p.body,
            owner: this.props.p.owner,
            category: this.props.p.category
        })
    }

    render() {
        //Checking if post has been posted

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
                                        <select disabled onChange={(e) => this.valueChanged(e, 'category')} className="form-control">
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
                                        <input disabled onChange={(e) => this.valueChanged(e, 'owner')} type="text" className="form-control"
                                            placeholder="Anonymous"
                                            value={this.state.owner} />
                                    </div>
                                    <button onClick={this.submitForm} className="btn btn-primary clicable">Edit</button>
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

function mapStateToProps({ post }) {
    const p = post.currentPost;
    return { p }
}

export default withRouter(connect(mapStateToProps)(EditPost));
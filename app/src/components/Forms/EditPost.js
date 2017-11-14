import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { editPost } from '../../actions';

class EditPost extends Component {

    //State is used for handling Form
    state = {
        title: '',
        body: ''
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
        this.props.dispatch(editPost(id, post));

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
        const { title, body } = this.props.p;
        this.setState({
            title,
            body           
        });
    }
    
   
    render() {
        
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
                                <h1>Edit Post</h1>
                            </div>
                        </div>
                    </div>

                    <div className="card-body">

                        <div className="card-block">
                            <div className="container">
                                <form>
                                    <div className="form-group">
                                        <label>Post Title</label>
                                        <input ref="title" type="text" onChange={(e) => this.valueChanged(e, 'title')} className="form-control" required placeholder="Enter title"
                                            value={this.state.title} />
                                    </div>
                                    <div className="form-group">
                                        <label>Category</label>
                                        <select disabled value={this.props.p.category} className="form-control">
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
                                        <input disabled type="text" className="form-control"
                                            placeholder="Anonymous"
                                            value={this.props.p.author} />
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
import React, { Component } from 'react';

export default class NewPost extends Component {
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
                                        <label for="exampleInputEmail1">Post Title</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleSelect1">Category</label>
                                        <select className="form-control" id="exampleSelect1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Post</label>
                                        <textarea className="form-control" rows="8" placeholder="Your message here..."></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
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
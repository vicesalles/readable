import React, { Component } from 'react';

export default class FullPost extends Component {
    render() {
        return (
            <div className="row">

                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-10">
                                    <h1>{this.props.title || 'Title'}</h1>
                                </div>
                                <div className="col ">
                                    <div className="container">
                                        <span className="badge badge-success"><a href="#" className="pillbutton">Edit</a></span>
                                        &nbsp;
                                        <span className="badge badge-danger"> <a href="#" className="pillbutton">delete</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-body">
                            <p>{this.props.text ||'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus dolor fermentum, placeratsapien hendrerit.'}</p>

                        </div>
                        <div className="card-footer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-8">
                                        <a href="#" className="btn btn-success">Comment</a>
                                        &nbsp;
                                        <a href="#" className="btn btn-success">UpVote</a>
                                        &nbsp;
                                        <a href="#" className="btn btn-success">DownVote</a>
                                    </div>
                                    <div className="col-4">

                                        <span className="badge badge-primary">{this.props.category ||'Category'}</span>
                                        &nbsp;
                                        <span className="badge badge-info">{this.props.category ||'n'} Votes</span>
                                        &nbsp;
                                        <span className="badge badge-light">{this.props.date || '17:14 01/10/17'}</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
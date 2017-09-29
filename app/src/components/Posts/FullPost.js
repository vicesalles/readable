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
                                    <h1>titol</h1>
                                </div>
                                <div className="col ">
                                    <div className="container">
                                        <span className="badge badge-success"><a href="#" className="pillbutton">Edit</a></span>
                                        <span className="badge badge-danger"> <a href="#" className="pillbutton">delete</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus dolor fermentum, placerat
                                        tellus eu, luctus velit. Nulla facilisi. Nam vehicula blandit nisi, eu lacinia erat eleifend
                                        eget. Phasellus posuere sagittis ipsum, tempus aliquam ante efficitur a. Duis suscipit est a
                                        turpis aliquet pharetra. Nunc sed ornare orci. Donec ac ipsum nec neque tincidunt ultricies.
                                        Nam egestas, purus vitae fermentum porta, odio nulla laoreet augue, vel tincidunt lectus felis
                                        at libero. Pellentesque pharetra a metus ac blandit. Curabitur eget varius lacus. Cras molestie
                                        augue ac massa ornare accumsan. Quisque condimentum dolor ex. Ut ut lacus est. Nulla facilisi.
                                        Sed pellentesque enim non erat iaculis, ut porta sapien hendrerit.</p>

                        </div>
                        <div className="card-footer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-8">
                                        <a href="#" className="btn btn-success">Comment</a>
                                        <a href="#" className="btn btn-success">UpVote</a>
                                        <a href="#" className="btn btn-success">DownVote</a>
                                    </div>
                                    <div className="col-4">

                                        <span className="badge badge-primary">Category</span>
                                        <span className="badge badge-info">Votes</span>
                                        <span className="badge badge-light">17:30 27/04/16</span>

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
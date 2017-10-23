import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addComment } from '../../actions';
import * as utils from '../../utils/helpers';

class NewComment extends Component {
    state = {
        comment: '',
        owner:''
    }
    componentDidMount() {
        this.refs.comentari.focus();
    }
    handleChange = (e,t) => {
        this.setState({ [t]: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();

        //Create comment object
        let q = {}
        q.timestamp= Date.now();
        q.id= utils.guid();
        q.body=this.state.comment;
        q.owner= this.state.owner;
        q.parentId = this.props.match.params.id;

        /*
                id: Any unique ID. As with posts, UUID is probably the best here.  
            timestamp: timestamp. Get this however you want.  
            body: String  
            owner: String  
            parentId: Should match a post id in the database.  
        */
        this.props.dispatch(addComment(q));

    }
    render() {
        return (
            <div className="row row-space" >
                <div className="col">
                    <div className="card">

                        <div className="card-header">
                            Comment
                    </div>
                        <div className="card-block">
                            <div className="container">
                                <form>
                                    <textarea onChange={(e) => { this.handleChange(e,'comment') }} required ref="comentari" value={this.state.comment} className="form-control" cols="30"></textarea>
                                    <input type="text" onChange={(e)=>{this.handleChange(e,'owner')}} value={this.state.owner} placeholder="Your name"/>
                                    <button onClick={(e) => { this.handleSubmit(e) }} type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>



                    </div>
                </div>

            </div>
        )
    }
}


export default withRouter(connect()(NewComment));
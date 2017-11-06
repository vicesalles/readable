import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addComment } from '../../actions';
import * as utils from '../../utils/helpers';

class NewComment extends Component {
    state = {
        comment: '',
        owner: ''
    }
    componentDidMount() {
        this.refs.comentari.focus();
    }
    handleChange = (e, t) => {
        this.setState({ [t]: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();

        //Creating the comment object
        const q = {
            timestamp:Date.now(),
            id:utils.guid(),
            body:this.state.comment,
            author:this.state.owner,
            parentId:this.props.match.params.id
        }
              
        this.props.dispatch(addComment(q));

    }
    render() {
        return (

            <div className="col-12">
                <div className="card">

                    <div className="card-header">
                        Comment
                    </div>
                    <div className="card-block">
                        
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <textarea onChange={(e) => { this.handleChange(e, 'comment') }} required ref="comentari" value={this.state.comment} className="form-control" cols="30"></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="text" onChange={(e) => { this.handleChange(e, 'owner') }} value={this.state.owner} placeholder="Your name" />
                                  </div>
                                  <button onClick={(e) => { this.handleSubmit(e) }} type="submit" className="btn btn-primary btn-sm clicable">Submit</button>
                               
                            </form>
                        </div>
                    </div>



                </div>
            </div>

        )
    }
}


export default withRouter(connect()(NewComment));
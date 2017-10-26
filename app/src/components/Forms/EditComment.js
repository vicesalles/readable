import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { editComment } from '../../actions';
import * as utils from '../../utils/helpers';

class EditComment extends Component {
    state = {
        comment: '',
        owner: ''
    }
    componentDidMount() {
        this.refs.comentari.focus();
        this.setState({comment:this.props.current.body,owner:this.props.current.owner});
    }
    handleChange = (e, t) => {
        this.setState({ [t]: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();

        //Creating the comment object
        let q = {}
        q.timestamp = Date.now();
        q.body = this.state.comment;

        //Falta ID i parentId

        this.props.dispatch(editComment(this.props.current.id, this.props.current.parentId, q));

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
                                    <input type="text" value={this.state.owner} disabled />
                                </div>
                                <button onClick={(e) => { this.handleSubmit(e) }} type="submit" className="btn btn-primary btn-sm clicable">Edit</button>

                            </form>
                        </div>
                    </div>



                </div>
            </div>

        )
    }
}

function mapStateToProps({ comment }) {
    const current = comment.edit.comment;
    return { current }
}

export default withRouter(connect(mapStateToProps)(EditComment));
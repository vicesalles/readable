import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getComments } from '../../actions';
import CommentsItem from './CommentsItem';

class Comments extends Component {
    parseComments = (array) => {
     
           const res = array.map((c)=>{
               return <CommentsItem key={c.id} comment={c} />
           })
   
           return res;
    }
    componentDidMount() {

        const postId = this.props.match.params.id;
        this.props.getComments(postId);

    }
    render() {
        return (
            <div className="col">
                <div className="card">
                    <div className="card-header">Comments</div>
                    <ul className="list-group list-group-flush">
                        {this.parseComments(this.props.comments)}
                    </ul>
                    <div className="card-body">
                        <div className="row">
                            <a className="btn btn-success btn-lg clicable" role="button">Comment</a>
                        </div>
                    </div>

                </div>

            </div>

        )
    }
}

function mapStateToProps({ comment }, ownProps) {
    
    const comments = comment.comments;
    return {
        comments,
        ownProps
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getComments: (id) => dispatch(getComments(id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comments));
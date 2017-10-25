import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getComments, wannaComment } from '../../actions';
import CommentsItem from './CommentsItem';

class Comments extends Component {
    parseComments = (array) => {

        const res = array.map((c) => {
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
                            <a onClick={() => this.props.wannaComment()} className="btn btn-success clicable" role="button">Comment</a>
                        </div>
                    </div>

                </div>

            </div>

        )
    }
}

function mapStateToProps({ comment }, ownProps) {

    const allComments = comment.comments;

    const comments = allComments.filter((c)=>c.deleted===false);

    return {
        comments,
        ownProps
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getComments: (id) => dispatch(getComments(id)),
        wannaComment: () => dispatch(wannaComment())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comments));
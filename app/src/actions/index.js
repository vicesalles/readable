import * as api from '../utils/api';

//ACTIONS FOR POSTS
export const GET_CURRENT_POST = "GET_CURRENT_POST";
export const SET_CURRENT_POST = "SET_CURRENT_POST";
export const GET_POSTS = "GET_POSTS";
export const SET_POSTS = "SET_POSTS";
export const SORT_POSTS = "SORT_POSTS";
export const ADD_POST = 'ADD_POST';
export const POST_POSTED = "POST_POSTED"
export const DELETE_POST = "DELETE_POST";
export const EDIT_POST = "EDIT_POST";
export const VOTE_POST = "VOTE_POST";
export const POST_VOTED = "POST_VOTED";
export const SET_FILTER = "SET_FILTER";

//ACTIONS FOR COMMENTS
export const GET_COMMENTS = 'GET_COMMENTS';
export const GOT_COMMENTS = 'GOT_COMMENTS';
export const WANNA_COMMENT = "WANNA_COMMENT";
export const ADD_COMMENT = 'ADD_COMMENT';
export const COMMENT_ADDED = "COMMENT_ADDED";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const WANNA_EDIT = "WANNA_EDIT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const VOTE_COMMENT = "VOTE_COMMENT";

/**
 * POSTS
 */

/**
 * Thunk: async call for getting posts of the API
 * @param String category 
 */
export function getPosts(category) {
    let cat;
    category === undefined ? cat = "" : cat = category;
    return (dispatch) => {

        api.getPosts(cat).then((res) => res.json()).then((posts) => {
            const res = {
                posts,
                category
            };
            dispatch(setPosts(res));
        })
    }
}

/**
 * Passes the getPosts results to the Store
 * @param Object action
 */
export function setPosts(action) {
    return {
        type: SET_POSTS,
        category: action.category,
        posts: action.posts
    }
};

export function getCurrentPost(id) {

    return (dispatch) => {
        api.getPost(id).then((res) => res.json()).then((post) => {
            dispatch(setCurrentPost(post))
        })
    }

}

export function setCurrentPost(post) {

    return {
        type: SET_CURRENT_POST,
        post
    }


}

export function sortPosts({
    filter
}) {
    return {
        type: SORT_POSTS,
        filter
    }
}

export function addPost(post) {

    return (dispatch) => {

        api.addPost(post).then(() => {
            dispatch(postPosted())
        })

    }

}


export function postPosted() {
    return {
        type: POST_POSTED
    }
}


export function deletePost(id, cat) {
    console.log('action: deleting post');
    return dispatch => {
        api.deletePost(id).then(() => {
            console.log('post deleted');
            dispatch(getPosts(cat));
        })
    }
}
export function editPost(id, post) {
    return {
        type: EDIT_POST,
        id,
        post
    }
}

export function votePost(id, vote) {
    return (dispatch) => {
        api.voteApost(id, vote).then((r) =>
            dispatch(postVoted(r))
        )
    }
}

export function postVoted(voteScore) {
    return {
        type: POST_VOTED,
        voteScore
    }
}

/**
 * Sets the filter for displaying posts
 * @param String filter 'voteScore'|'timestamp' 
 * @param String direction 'asc'|'desc'
 */

export function setFilter(filter, direction) {
    const myFilter = { f: filter, d: direction };
    return {
        type: SET_FILTER,
        filter: myFilter
    }
}

/**
 * COMMENTS
 */

export function getComments(parentId) {
    return (dispatch) => {
        api.getComments(parentId).then((comments) => {
            dispatch(gotComments(comments));
        })
    }
}

export function gotComments(comments) {
    return {
        type: GOT_COMMENTS,
        comments
    }
}

//User wants to comment, view must be updated
export function wannaComment() {
    return {
        type: WANNA_COMMENT
    }
}

/**
 * Adding a comment
 * @param Object q 
 */
export function addComment(q) {

    return dispatch => {

        api.addComment(q).then((res) => {

            //Dispatches get comments due to updating the state as needed.
            dispatch(getComments(q.parentId));

        })

    }

}


export function deleteComment(id, parentId) {
    return dispatch => {
        api.deleteComment(id).then(() => {
            //Updating the state is needed
            dispatch(getComments(parentId));
        })
    }
}

export function wannaEdit(id) {
    console.log('action', id);
    return dispatch => {
        api.singleComment(id).then((r) => {
           dispatch( {
                type: WANNA_EDIT,
                comment: r
            });
        })
    }


}

export function editComment(id, parentId, comment) {
    return dispatch => {
        api.editComment(id, comment).then(() => {
            dispatch(getComments(parentId));
        })
    }
}



export function voteComment(id, vote) {
    return (dispatch) => {
        api.voteAcomment(vote, id).then((r) => {
            dispatch(getComments(r.parentId));
        })
    }
}
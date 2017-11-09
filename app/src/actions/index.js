import * as api from '../utils/api';
import {
    GET_POSTS,
    GET_CURRENT_POST,
    SORT_POSTS,
    ADD_POST,
    WANNA_EDIT_POST,
    VOTE_POST,
    EDIT_POST,
    SET_FILTER,
    GET_COMMENTS,
    WANNA_COMMENT,
    WANNA_EDIT_COMMENT,
    ADD_COMMENT,
    VOTE_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT,
    GET_CATEGORIES,
    POST_EDITED
} from './actionTypes';


/**
 * CATEGORIES
 */

export function getCategories() {
    return (dispatch) => {
        api.getCategories().then((res) => res.json()).then((r) => {
            const categories = r.categories;
            dispatch({
                type: GET_CATEGORIES,
                categories
            })
        })
    }
}


/**
 * POSTS
 */

/**
 * Thunk: async call for getting posts from the API
 * @param String category If no category passed it returns all of the posts
 */
export function getPosts(category) {
    let cat;
    category === undefined ? cat = "" : cat = category;
    return (dispatch) => {

        api.getPosts(cat).then((res) => res.json()).then((posts) => {
            dispatch({
                type: GET_POSTS,
                category,
                posts
            });
        })
    }
}

/**
 * Thunk: Get the post data for a given ID
 * @param String id 
 */
export function getCurrentPost(id) {
    return (dispatch) => {
        api.getPost(id).then((res) => res.json()).then((post) => {
            dispatch({
                type: GET_CURRENT_POST,
                post
            })
        })
    }
}

/**
 * Organize posts by given Filter
 * @param Object filter 
 */
export function sortPosts({
    filter
}) {
    return {
        type: SORT_POSTS,
        filter
    }
}

/**
 * Adds a post
 * @param Object post 
 */
export function addPost(post) {

    return (dispatch) => {

        api.addPost(post).then(() => {
            dispatch({
                type: ADD_POST
            })
        })

    }

}

/**
 * Deletes a post, his comments and calls getPosts for refreshing the state
 * @param String id 
 * @param String at Category 
 */
export function deletePost(id, cat) {

    return dispatch => {
        api.deletePost(id).then(() => {
            //Delete all the post's comments
            api.deleteAllComments(id);
            dispatch(getPosts())
        })
    }
}

// Inits UI for editing a Post
export function wannaEditPost() {
    return {
        type: WANNA_EDIT_POST
    }
}

//Submiting Edition and restoring UI
export function editPost(id, post) {
    return dispatch => {
        api.editPost(id, post).then((r) => {
            
            return dispatch({
                type: POST_EDITED,
                post
            })

        })
    }
}

export function votePost(id, vote) {
    return (dispatch) => {
        api.voteApost(id, vote).then((r) =>
            dispatch({
                type: VOTE_POST,
                voteScore: r,
                id
            })
        )
    }
}

/**
 * Sets the filter for displaying posts
 * @param String filter 'voteScore'|'timestamp' 
 * @param String direction 'asc'|'desc'
 */
export function setFilter(filter, direction) {
    const myFilter = {
        f: filter,
        d: direction
    };
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
            dispatch({
                type: GET_COMMENTS,
                comments
            });
        })
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

export function wannaEditComment(id) {

    return dispatch => {
        api.singleComment(id).then((r) => {
            dispatch({
                type: WANNA_EDIT_COMMENT,
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

/**
 * Add a vote to a given comment
 * @param String id 
 * @param String vote "upVote" || "downVote" 
 */
export function voteComment(id, vote) {
    return (dispatch) => {
        api.voteAcomment(vote, id).then((r) => {
            dispatch(getComments(r.parentId));
        })
    }
}
import * as api from '../utils/api';

export const SET_CURRENT_POST = "SET_CURRENT_POST";
export const GET_POSTS = "GET_POSTS";
export const SET_POSTS = "SET_POSTS";
export const SORT_POSTS = "SORT_POSTS";
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';
export const VOTE_POST = 'VOTE_POST';

export const GET_COMMENTS = 'GET_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = "DELETE_COMMENT";
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
            console.log('action:', posts);
            const res = {posts,category};
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

export function setCurrentPost(id) {

    return (dispatch, id) => {
        api.getPost(id).then((post) => {
            return {
                type: SET_CURRENT_POST,
                post
            }
        })
    }

}

export function sortPosts({ filter }) {
    return {
        type: SORT_POSTS,
        filter
    }
}

export function addPost({ title, body, author, category }) {
    return {
        type: ADD_POST,
        title,
        body,
        author,
        category
    }
}
export function deletePost({ id }) {
    return {
        type: DELETE_POST,
        id
    }
}
export function editPost({ id, title, body }) {
    return {
        type: EDIT_POST,
        id,
        title,
        body
    }
}

export function votePost(id, vote) {
    return {
        type: VOTE_POST,
        id,
        vote
    }
}

/**
 * COMMENTS
 */

export function getComments({ parentId }) {
    return {
        type: GET_COMMENTS,
        parentId
    }
}

export function addComment({ parentId, text }) {
    return {
        type: ADD_COMMENT,
        parentId,
        text
    }
}

export function deleteComment({ id }) {
    return {
        type: DELETE_COMMENT,
        id
    }
}

export function editComment({ id, text }) {
    return {
        type: EDIT_COMMENT,
        id,
        text
    }
}

export function voteComment(id, vote) {
    return {
        type: VOTE_COMMENT,
        id,
        vote
    }
}

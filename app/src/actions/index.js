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

//ACTIONS FOR COMMENTS
export const GET_COMMENTS = 'GET_COMMENTS';
export const GOT_COMMENTS = 'GOT_COMMENTS';
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


export function deletePost({
    id
}) {
    return {
        type: DELETE_POST,
        id
    }
}
export function editPost({
    id,
    title,
    body
}) {
    return {
        type: EDIT_POST,
        id,
        title,
        body
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
 * COMMENTS
 */

export function getComments(parentId) {
    
    return (dispatch) => {
        api.getComments(parentId).then((comments) => {
            dispatch(gotComments(comments));
        })

    }


}

export function gotComments(comments){
    return {
        type: GOT_COMMENTS,
        comments
    }
}

export function addComment({
    parentId,
    text
}) {
    return {
        type: ADD_COMMENT,
        parentId,
        text
    }
}

export function deleteComment({
    id
}) {
    return {
        type: DELETE_COMMENT,
        id
    }
}

export function editComment({
    id,
    text
}) {
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
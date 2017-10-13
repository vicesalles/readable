export const VOTE_ITEM = 'VOTE_ITEM';

export const GET_POSTS = "GET_POSTS"
export const SORT_POSTS = "SORT_POSTS";
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';


export const GET_COMMENTS = 'GET_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT= "DELETE_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";


/**
 * POSTS
 * 
 * 
 */

export function getPosts({category,order}){
    return{
        type:GET_POSTS,
        category
    }
}

export function sortPosts({filter}){
    return{
        type:SORT_POSTS,
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

/**
 * COMMENTS
 */

export function getComments({parentId}){
    return{
        type:GET_COMMENTS,
        parentId
    }
}

export function addComment({parentId,text }) {
    return{
        type:ADD_COMMENT,
        parentId,
        text
    }
 }

export function deleteComment({id}) {
    return{
        type:DELETE_COMMENT,
        id
    }
 }

export function editComment({id, text }) {
    return{
        type:EDIT_COMMENT,
        id,
        text
    }
 }


/**
 * VOTING
 */
export function voteItem({ itemType, id }) {
    return {
        type: VOTE_ITEM,
        itemType,
        id
    }
}


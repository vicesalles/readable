import {
    combineReducers
} from 'redux';
import {
    VOTE_ITEM,
    SET_POSTS,
    SORT_POSTS,
    ADD_POST,
    SET_CURRENT_POST,
    POST_VOTED,
    DELETE_POST,
    EDIT_POST,
    GET_COMMENTS,
    ADD_COMMENT,
    DELETE_COMMENT,
    EDIT_COMMENT,
    VOTE_COMMENT
} from '../actions';


const initialPostState = {
    category: '',
    filter: '',
    posts: [],
    currentPost: ''
}

function post(state = initialPostState, action) {

    const {
        posts,
        category,
        filter,
        currentPost,
        id,
        post
    } = action;

    switch (action.type) {
        case SET_POSTS:
            console.log('got posts');
            return {
                ...state,
                ['posts']: posts,
                ['category']: category
            }

        case SORT_POSTS:
            return {
                ...state,
                ['filter']: filter
            }
            console.log('sort posts');
        case ADD_POST:
            console.log('post added');
        case DELETE_POST:
            console.log('post deleted');
        case POST_VOTED:
            return state;
            return{
                   ...state,
                   ['currentPost']:{
                    ...state['currentPost'],
                    ['voteScore']: action.voteScore
                   }
                   
               }
            console.log('post voted');
        case SET_CURRENT_POST:
            console.log('setting current post');
            return { ...state,
                ['currentPost']: post
            }
        default:
            return state;
    }

}

const initialCommentState = {
    comments: [],
    commenting: false
}

function comment(state = initialCommentState, action) {
    switch (action.type) {
        case ADD_COMMENT:
            console.log('added comment');
        case GET_COMMENTS:
            console.log('omments voted');
        case VOTE_COMMENT:
            console.log('comment voted');
        default:
            return state;
    }

}

export default combineReducers({
    post,
    comment
})
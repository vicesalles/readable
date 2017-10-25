import {
    combineReducers
} from 'redux';
import {
    SET_POSTS,
    SORT_POSTS,
    POST_POSTED,
    SET_CURRENT_POST,
    POST_VOTED,
    DELETE_POST,
    EDIT_POST,
    GOT_COMMENTS,
    WANNA_COMMENT,
    ADD_COMMENT,
    DELETE_COMMENT,
    EDIT_COMMENT,
    SET_FILTER
} from '../actions';


const initialPostState = {
    category: '',
    filter: {
        f: 'voteScore',
        d: 'desc'
    },
    posts: [],
    currentPost: '',
    gotPosted: false
}

function post(state = initialPostState, action) {

    const {
        posts,
        category,
        filter,
        post
    } = action;

    switch (action.type) {
        case SET_POSTS:

            return {
                ...state,
                ['posts']: posts,
                ['category']: category,
                ['gotPosted']: false
            }

        case SORT_POSTS:
            return {
                ...state,
                ['filter']: filter
            }

        case POST_POSTED:
            return {
                ...state,
                ['gotPosted']: true
            }
        case DELETE_POST:
            console.log('post deleted');
        case SET_FILTER:

            return {
                ...state,
                ['filter']: action.filter
            }

        case POST_VOTED:

            return {
                ...state,
                ['currentPost']: {
                    ...state['currentPost'],
                    ['voteScore']: action.voteScore
                }

            }

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
        case GOT_COMMENTS:
            return {
                ...state,
                ['comments']: action.comments,
                commenting: false
            }
        case WANNA_COMMENT:
            console.log('wanna comment');
            return {
                ...state,
                commenting: true
            }
        default:
            return state;
    }

}

export default combineReducers({
    post,
    comment
})
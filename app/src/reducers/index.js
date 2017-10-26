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
    WANNA_EDIT_POST,
    GOT_COMMENTS,
    WANNA_COMMENT,
    ADD_COMMENT,
    DELETE_COMMENT,
    WANNA_EDIT,
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
    gotPosted: false,
    editing: false
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
            return { ...state,
                ['currentPost']: post,
                editing: false
            }

        case WANNA_EDIT_POST:
            return {
                ...state,
                editing: true
            }
        default:
            return state;
    }

}

const initialCommentState = {
    comments: [],
    commenting: false,
    edit: {
        editing: false,
        comment: {}
    }
}

function comment(state = initialCommentState, action) {
    switch (action.type) {
        case ADD_COMMENT:
            console.log('added comment');
        case GOT_COMMENTS:
            return {
                ...state,
                ['comments']: action.comments,
                commenting: false,
                edit: {
                    editing: false,
                    comment: {}
                }
            }
        case WANNA_COMMENT:
            console.log('wanna comment');
            return {
                ...state,
                commenting: true
            }
        case WANNA_EDIT:
            console.log('reducer wanna edit');
            return {
                ...state,
                edit: {
                    editing: true,
                    comment: action.comment
                }
            }

        default:
            return state;
    }

}

export default combineReducers({
    post,
    comment
})
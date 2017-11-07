import {
    combineReducers
} from 'redux';
import {
    GET_POSTS,
    SORT_POSTS,
    ADD_POST,
    GET_CURRENT_POST,
    VOTE_POST,
    WANNA_EDIT_POST,
    GET_COMMENTS,
    WANNA_COMMENT,
    ADD_COMMENT,
    WANNA_EDIT_COMMENT,
    SET_FILTER,
    GET_CATEGORIES
} from '../actions/actionTypes';


const initialPostState = {
    categories: [],
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

        case GET_CATEGORIES:

            const {categories} = action;

            return {
                ...state,
                ['categories']: categories
            }

        case GET_POSTS:

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

        case ADD_POST:
            return {
                ...state,
                ['gotPosted']: true
            }

        case SET_FILTER:

            return {
                ...state,
                ['filter']: action.filter
            }

        case VOTE_POST:

            //Getting non voted posts
            const allLess = state.posts.filter((p)=>p.id!==action.id);
            //Getting the voted post
            const votedPost = state.posts.filter((p)=>p.id===action.id);
            //Assigning new voteScore value
            const newValue = votedPost.map((p)=>{
                const r = Object.assign({},p,{
                    voteScore: action.voteScore
                })
                return r;
            })
            //Creating new state Posts array
            const updatedPosts = allLess.concat(newValue);

            return {
                ...state,
                ['posts']:updatedPosts,
                ['currentPost']: {
                    ...state['currentPost'],
                    ['voteScore']: action.voteScore
                }
                

            }

        case GET_CURRENT_POST:
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
        case GET_COMMENTS:
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
        case WANNA_EDIT_COMMENT:

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
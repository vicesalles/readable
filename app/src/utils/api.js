//#### CATEGORIES

/**
 * @description Gets all the avaible categories
 * @returns Array of avaible categories in the server
 */
export function getCategories(){
    return fetch('http://localhost:3001/categories', {
        method: 'GET',
        headers: {
            'Authorization': 'w-want'
        }
    }).then((r) => r)
}

//#### POSTS

/**
 * It returns all the posts or only the posts for a given category if passed
 * @param String cat Category name 
 */

export function getPosts(cat = '') {

    //If no category specified get all the posts
    if (cat === '') {

        return fetch('http://localhost:3001/posts', {
            method: 'GET',
            headers: {
                'Authorization': 'w-want'
            }
        }).then((r) => r)

    } else {

        return fetch(`http://localhost:3001/${cat}/posts`, {
            method: 'GET',
            headers: {
                'Authorization': 'w-want'
            }
        }).then((r) => r)
    }

}

/**
 * Get a Single Post
 * @param String id 
 */
export function getPost(id) {
    return fetch(`http://localhost:3001/posts/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': 'w-want'
        }
    }).then((r) => r)
}

/**
 * Posts a post
 * @param Object post - Post 
 */
export function addPost(post) {

    return fetch('http://localhost:3001/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'w-want'
        },
        body: JSON.stringify(post)

    });

}

/**
 * Gives a vote to a post
 * @param String id 
 * @param String vote upVote || DownVote 
 */
export function voteApost(id, vote) {

    //The object that's need to be passed
    const q = {
        "option": vote
    };

    return fetch(`http://localhost:3001/posts/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'w-want'
        },
        body: JSON.stringify(q)
    }).then((r) => r.json()).then((r) => r.voteScore)
}

/**
 * Modifies a given post
 * @param Object post 
 */
export function editPost(id, post) {
    return fetch(`http://localhost:3001/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'w-want'
        },
        body: JSON.stringify(post)
    })
}

/**
 * Deletes a post from the 'database'
 * @param String postId 
 */
export function deletePost(postId) {
    return fetch(`http://localhost:3001/posts/${postId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'w-want'
        }
    })
}





//#### COMMENTS

/**
 * Returns all the comments for a given Post
 * @param String postId - Parent Post Id 
 */
export function getComments(postId) {

    return fetch(`http://localhost:3001/posts/${postId}/comments`, {
        method: 'GET',
        headers: {
            'Authorization': 'w-want'
        }
    }).then((res) => {
        return res.json()
    })

}

export function postComment(comment, parent) {

    return fetch(`http://localhost:3001/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'w-want'
        },
        body: comment
    }).then((r) => console.log(r))

}

/**
 * Get a single comment
 * @param String id 
 */
export function singleComment(id) {
    console.log('api',id);
    return fetch(`http://localhost:3001/comments/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'w-want'
        }
    }).then((r) => {return r.json()})


}

export function editComment(id, comment) {

    return fetch(`http://localhost:3001/comments/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'w-want'
        },
        body: JSON.stringify(comment)
    })

}


export function voteAcomment(vote, id) {
    //The object that's need to be passed
    const q = {
        "option": vote
    };
    return fetch(`http://localhost:3001/comments/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'w-want'
        },
        body: JSON.stringify(q)
    }).then((r) => r.json()).then((r) => {
        return {
            'parentId': r.parentId,
            'voteScore': r.voteScore
        }
    })
}


export function addComment(q) {

    return fetch('http://localhost:3001/comments/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'w-want'
        },
        body: JSON.stringify(q)
    })
}


/**
 * Deletes a comment from the 'database'
 * @param String id 
 */
export function deleteComment(id) {
    return fetch(`http://localhost:3001/comments/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'w-want'
        }
    })
}

/**
 * Delete all comments for a given parentID
 */
export function deleteAllComments(parentId){
    getComments(parentId).then((comments)=>{
        comments.map((m)=>{
           return deleteComment(m.id);
        })
    })
}
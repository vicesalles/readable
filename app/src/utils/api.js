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

        console.log(cat);

        return fetch(`http://localhost:3001/${cat}/posts`, {
            method: 'GET',
            headers: {
                'Authorization': 'w-want'
            }
        }).then((r) => r)

    }


}

/**
 * Posts a post
 * @param Object post - Post 
 */
export function postPost(post) {

    return fetch('http://localhost:3001/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'w-want'
        },
        body: JSON.stringify(post)

    });

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
            'Authorization': 'w-want'
        },
        body: comment
    }).then((r) => console.log(r))

}


//export function get
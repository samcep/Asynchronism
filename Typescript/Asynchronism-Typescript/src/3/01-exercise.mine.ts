/*
 ! 3. Get All Users and Their Comments Using Promise.all
 * Objective: Use Promise.all to fetch data in parallel.
* Instructions:

* Make a GET request to https://jsonplaceholder.typicode.com/users to get a list of users.
* Use Promise.all() to fetch the comments of all posts for all users concurrently.
* For each user, use https://jsonplaceholder.typicode.com/posts?userId={id} to get their posts and then fetch the comments for all posts concurrently.
* Display the title of the posts and the body of their comments in the console.

*/

import { Post } from "../interfaces/post";
import { User } from "../interfaces/user"

export const allPromises = async () => { 
    const users = await getUsers();
    const postsComments = [];
    const usersPosts  = users.map(user => getUserPosts(user.id));
    const usersPostsResponse = await Promise.all(usersPosts);
    for (const userPostsResponse of usersPostsResponse) { 
        for await (const postsComments of userPostsResponse.map(post => getPostComments(post.id))) {
            for (const postComment of postsComments){
                console.log(`
                    \n Post Id #${postComment.postId!}
                    \n #${postComment.id} By ${postComment.email}
                        ${postComment.body}}
                    `)
            }
        }  
    }
}   



const getUsers  = async () : Promise<User[]>=>  {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if(!response.ok) throw new Error('Failed to fetch users')
        return await response.json();
    } catch (error) {
        console.error('Something were wrong fetching users')
        return [];
    }
}

const getUserPosts = async (userId: number)  : Promise<Post[]> => { 

    try {
        const response  = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        if(!response.ok) throw new Error(`Failed fetching posts for userId ${userId}`);
        return await response.json();
    } catch (error) {
        return [];
    }
}
const getPostComments = async (postId : number) : Promise<Comment[]>=> { 
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        if(!response.ok) throw new Error(`Failed fetching comments for post ${postId}`)
        return await response.json();

    } catch (error) {
        return [];   
    }
}
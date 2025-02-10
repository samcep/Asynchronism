/*
  !2. Fetch Posts of a Specific User and Display Comments
  *Objective:
  !Practice fetching posts for a specific user and displaying the comments of each post.

  ?Instructions:
  ?Make a GET request to https://jsonplaceholder.typicode.com/posts?userId={id} to get the posts of a specific user (choose any userId).
  ?For each post, make another request to https://jsonplaceholder.typicode.com/comments?postId={id} to fetch the comments for that post.
  ?Display the title of the post and the body of each comment in the console.
*/ 

import { Post } from "../interfaces/post";
import type { User } from "../interfaces/user";
import type {  Comment } from "../interfaces/comment";


export  async function EXERCISE02() {

    const posts  : Post[] = await getUserPosts(1);

    const postCommentsPromises = posts.map(post => getPostComments(post.id));
    const postComments = await Promise.all(postCommentsPromises);

    postComments.forEach((comments, index) => {
        console.log(`\nPost: ${posts[index].title}`);
        comments.forEach((comment: Comment) => { 
            console.log(`- ${comment.email}: ${comment.body}`);
        });
    });
}


const getUserPosts  = async (userId: number) : Promise<Post[]> => { 
    const reponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    if(!reponse.ok) throw new Error(`Failed to fetch posts of the user ${userId}`)
    return await reponse.json();
}


const getPostComments = async (postId: number) : Promise<Comment[]> => { 

    const response  = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    if(!response.ok) throw new Error(`Cannot fetch comments of the post ${postId}`)
    return response.json();
}
import { Post } from "../interfaces/post";
import { User } from "../interfaces/user"

export const allPromises = async () => { 
    const users = await getUsers();
    
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
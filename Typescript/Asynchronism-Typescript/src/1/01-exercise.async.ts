import { Post } from "../interfaces/post";
import { User } from "../interfaces/user"

export const GetUsersWithChainedPromisesFeedback = async () => {
    try { 
        const users : User[] = await getUsers();
        const userPostsPromises = users.map(user => getUserPosts(user.id));
        const usersPosts =  await Promise.all(userPostsPromises);
        usersPosts.forEach((userPost , index) => { 
            console.log(`\nUser ${users[index].name}`)
            userPost.forEach((post: Post) => {
                console.log(`  Post ID: ${post.id} - Title: ${post.title}`);
            })
        })
    }catch(error) { 
        console.error("Error fetching users or posts:", error);
    }
}
const getUsers = async (): Promise<User[]> => { 
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if(!response.ok) throw new Error("Failed to fetch users");
    return response.json(); 
}

const getUserPosts = async (userId: number) : Promise<Post[]>=> { 
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    if(!response.ok) throw new Error('Failed to fetch posts for user id ' + userId);
    return response.json();
}
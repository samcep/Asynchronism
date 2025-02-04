import { Post } from "../interfaces/post";
import { User } from "../interfaces/user"

export const GetUsersWithChainedPromisesFeedback = async () => {
  
  console.log('promises')

  getUsers()
    .then((users : User[]) => { 
        const usersPostsPromises = users.map(user => getUserPosts(user.id));

        return Promise.all(usersPostsPromises)
            .then(usersPosts => {
                usersPosts.forEach((userPosts , index) => { 
                    console.log(`\nUser: ${users[index].name}`);
                    userPosts.forEach((post : Post) => { 
                        console.log(`  Post ID: ${post.id} - Title: ${post.title}`);
                    })
                })
            })
    })
    .catch((error) => {
        console.error("Error fetching users or posts:", error);
    });
}
const getUsers = () : Promise<User[]> => { 
    return fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => { 
                if (!response.ok) throw new Error('Failed to fetch users');
                return response.json();
            })
}
const getUserPosts = (userId: number): Promise<Post[]> => {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
       .then((response) => {
          if (!response.ok) throw new Error(`Failed to fetch posts for user ID ${userId}`);
          return response.json();
       });
 }
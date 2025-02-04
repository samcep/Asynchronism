/*

    * Get users with chained promises
    ! Objective: Make a request to get a list of users, then retrieve the posts of each user.
    ? Instructions:
    ? Use fetch() to get the list of users from https://jsonplaceholder.typicode.com/users.
    ? Then, for each user, make another request to get that user's posts (https://jsonplaceholder.typicode.com/posts?userId={id}) using chained promises.
    ?Display the title of each post from each user in the console.


*/
import { Post } from "../interfaces/post";
import type { User } from "../interfaces/user";

export async function GetUsersWithChainedPromises(element: HTMLButtonElement) {
   const users : User[] = await getUsers();
   const userIds = users.map(user => user.id);
   const usersPostsPromises : Promise<Post[]>[] = [];
   userIds.forEach(id => usersPostsPromises.push(getUserPosts(id)))
   for await(const userPosts of usersPostsPromises) {
    userPosts.forEach((userPost : Post) => { 
        console.log(`\n User: ${userPost.userId}  Post: ${userPost.id} Title: ${userPost.title}`)
    })
   }
}
const getUsers = () : Promise<User[]> => { 
     return fetch('https://jsonplaceholder.typicode.com/users')
                    .then(response => response.json())
                    .then((users: User[]) => users)
                 

}
const getUserPosts = (id: number) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId2=${id}`)
            .then((response : Response) => response.json())
            .then((posts : Post[]) =>  posts)

}


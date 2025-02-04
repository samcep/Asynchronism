# Typescript/C# Fetch API Exercises

## 1. Get Users with Chained Promises  

### Objective:  
Make a request to get a list of users, then retrieve the posts of each user using chained promises.  

### Instructions:  
- Use `fetch()` to get the list of users from [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users).  
- For each user, retrieve their posts using `https://jsonplaceholder.typicode.com/posts?userId={id}`.  
- Chain the promises to fetch the posts after fetching the users and display the title of each post for each user.  

---

## 2. Fetch Posts of a Specific User and Display Comments  

### Objective:  
Practice fetching posts for a specific user and displaying the comments of each post.  

### Instructions:  
- Make a GET request to `https://jsonplaceholder.typicode.com/posts?userId={id}` to get the posts of a specific user (choose any `userId`).  
- For each post, make another request to `https://jsonplaceholder.typicode.com/comments?postId={id}` to fetch the comments for that post.  
- Display the title of the post and the body of each comment in the console.  

---

## 3. Get All Users and their Comments Using `Promise.all`  

### Objective:  
Use `Promise.all` to fetch data in parallel.  

### Instructions:  
- Make a GET request to [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users) to get a list of users.  
- Use `Promise.all()` to fetch the comments of all posts for all users concurrently.  
- For each user, use `https://jsonplaceholder.typicode.com/posts?userId={id}` to get their posts and then fetch the comments for all posts concurrently.  
- Display the title of the posts and the body of their comments in the console.  

---

## 4. Paginated API Requests with `async/await`  

### Objective:  
Use `async/await` to make multiple requests in a paginated API.  

### Instructions:  
- Use `fetch()` to request data from the paginated endpoint `https://jsonplaceholder.typicode.com/posts?_page={page}&_limit={limit}`.  
- Fetch data from multiple pages (e.g., get data from pages 1-3).  
- Use `async/await` to wait for each page to load, and then combine the results into a single array.  
- Display the title of each post from all pages in the console.  

---

## 5. Error Handling with `async/await`  

### Objective:  
Practice handling errors during asynchronous requests.  

### Instructions:  
- Make a GET request to [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users) to fetch a list of users.  
- Add error handling using a `try/catch` block. Simulate an error by changing the URL (e.g., `https://jsonplaceholder.typicode.com/invalidurl`).  
- Catch the error and display a friendly error message in the console instead of crashing the application.  

---

## 6. Retry Logic for Fetch Requests  

### Objective:  
Implement retry logic for making requests in case of failure.  

### Instructions:  
- Create a function that tries to fetch a list of users from [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users).  
- If the request fails, retry the request up to 3 times with a delay of 1 second between retries.  
- If the request fails after 3 retries, log an error message to the console.  

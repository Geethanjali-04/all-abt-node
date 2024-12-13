// Simulating fetching user data from a database
function fetchUser(userId, callback) {
    setTimeout(() => {
        console.log("Fetched user data");
        // After 1 second, we call the callback with the user data
        callback({ id: userId, name: "John Doe" });
    }, 1000);
}

// Simulating fetching posts for a user
function fetchPosts(userId, callback) {
    setTimeout(() => {
        console.log("Fetched posts for user");
        // After 1 second, we call the callback with the user's posts
        callback([
            { id: 1, title: "Post 1" },
            { id: 2, title: "Post 2" }
        ]);
    }, 1000);
}

// Simulating fetching comments for a specific post
function fetchComments(postId, callback) {
    setTimeout(() => {
        console.log("Fetched comments for post");
        // After 1 second, we call the callback with the post's comments
        callback(["Comment 1", "Comment 2"]);
    }, 1000);
}

// Nested Callbacks (Callback Hell)
fetchUser(1, (user) => {
    console.log("User fetched:", user);
    // First callback: Fetch the posts for the fetched user
    fetchPosts(user.id, (posts) => {
        console.log("Posts fetched:", posts);
        // Second callback: Fetch comments for the first post
        fetchComments(posts[0].id, (comments) => {
            console.log("Comments fetched:", comments);
        });
    });
});

// fetch("https://dummyjson.com/products", {
//   method: "GET",
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.error("Error:", error));



// fetch("https://dummyjson.com/posts/add", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     title: "I am in love with Meem.",
//     userId: 5,
//   }),
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.error("Error:", error));


fetch('https://dummyjson.com/users')
    .then((response) => response.json())
    .then((usersData) => {
        return fetch(`https://dummyjson.com/posts/user/${usersData.users[0].id}`);
    })
    .then((response) => response.json())
    .then((postsData) => {
        return fetch(`https://dummyjson.com/comments/post/${postsData.posts[0].id}`);
    })
    .then((response) => response.json())
    .then((commentsData) => {
        return fetch(`https://dummyjson.com/users/${commentsData.comments[0].user.id}`);
    })
    .then((response) => response.json())
    .then((userData) => {
        console.log("User data:", userData);
    })
    .catch((err) => {
        console.error("Error:", err);
    });

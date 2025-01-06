function makeHttpRequest(method, url) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    const promise = new Promise((resolve, reject) => {
        xhr.addEventListener("load", () => {
          resolve(xhr.response)
        });
    })

    xhr.open(method, url);
    xhr.send();

    return promise;
}

makeHttpRequest('GET', 'https://dummyjson.com/users')
    .then((usersData) => {
        return makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`)
    }).then((postsData) => {
        return makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`)
    }).then((commentsData) => {
        console.log(commentsData)
    }).then((data) => {
        console.log(data)
    })


// makeHttpRequest("GET", "https://dummyjson.com/users", (usersData) => {
//   makeHttpRequest(
//     "GET",
//     `https://dummyjson.com/posts/user/${usersData.users[0].id}`,
//     (postsData) => {
//       console.log(postsData.posts[0].id);
//       makeHttpRequest(
//         "GET",
//         `https://dummyjson.com/comments/post/${postsData.posts[0].id}`,
//         (commentsData) => {
//           console.log(commentsData.comments[0].user.id);
//           makeHttpRequest(
//             "GET",
//             `https://dummyjson.com/users/${usersData.users[0].id}`,
//             (data) => {
//               console.log(data);
//             }
//           );
//         }
//       );
//     }
//   );
// });

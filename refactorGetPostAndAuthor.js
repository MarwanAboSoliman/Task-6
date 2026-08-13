// function getPostAndAuthor(postId) {
//   return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//     .then((res) => res.json())
//     .then((post) => {
//       return fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
//         .then((res) => res.json())
//         .then((user) => {
//           console.log(`"${post.title}" by ${user.name}`);
//         });
//     })
//     .catch((error) => console.log("Error:", error));
// }

// console.log(getPostAndAuthor(1));

const getPostAndAuthor = async (postId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
    );
    const post = await response.json();
    const userRes = await fetch(
      `https://jsonplaceholder.typicode.com/users/${post.userId}`,
    );
    const user = await userRes.json();
    console.log(`"${post.title}" by "${user.name}"`);
  } catch (err) {
    console.log(err);
  }
};
console.log(getPostAndAuthor(1));

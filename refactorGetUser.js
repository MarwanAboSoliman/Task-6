// function getUser(id) {
//   return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then((response) => response.json())
//     .then((user) => {
//       console.log("User:", user.name);
//       return user;
//     })
//     .catch((error) => {
//       console.log("Failed to get user:", error);
//     });
// }

const getUser = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    const user = await response.json();
    console.log("User:", user.name);
    return user;
  } catch (err) {
    console.log(err);
  }
};

console.log(getUser(1));



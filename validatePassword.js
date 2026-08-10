const validatePassword = (password) => {
  return new Promise((resolve, reject) => {
    if (password.toString().split("").length < 8) {
      reject("Password Rejected : To Short");
    } else {
      resolve("Pasword Accepted");
    }
  });
};

const password = 1234567;
// const password = 12345678;

validatePassword(password)
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

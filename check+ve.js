const checkPositive = (n) => {
  return new Promise((resolve, reject) => {
    if (n > 0) {
      resolve(`${n} is +ve`);
    } else {
      reject(`${n} is -ve`);
    }
  });
};

// let number = -10;
// let number = 10;
// let number = 20;
let number = 0;

checkPositive(number)
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

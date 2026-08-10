const randomDelay = (min, max) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * (max - min + 1)) + min;
    if (max > min) {
      setTimeout(() => {
        resolve(`Waited for ${delay}ms`);
      }, delay);
    } else if (max < min) {
      reject(`Wrong Interval of Time`);
    }
  });
};

randomDelay(1000, 3000)
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });
randomDelay(2333, 4553)
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });
randomDelay(1000, 3000)
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

function createDelay(message, delayTime) {
  let promise = new Promise(function (resolve, reject) {
    let random = Math.random() * 10;
    if (random > 5) {
      reject("Error: Delay failed");
    }
    setTimeout(() => {
      resolve(message);
    }, delayTime);
  });
  return promise;
}

createDelay("Initial delay is completed", 1000)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

createDelay("Second delay is completed", 1500)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

createDelay("Last delay is completed", 2000)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

const promiseArray = [
  createDelay("First delay", 2000),
  createDelay("Second delay", 1000),
  createDelay("Third delay", 1500),
];

Promise.all(promiseArray)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(result);
  });

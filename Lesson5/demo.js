function printLog(content) {
  console.log(content);
}
let myPromise = new Promise(function (success, error) {
  let x = 0;
  if (x == 0) {
    success("OK");
  } else {
    error("Error");
  }
});

myPromise.then(
  function (success) {
    printLog(success);
  },
  function (error) {
    printLog(error);
  }
);

async function myFunction() {
  return "Hello";
}

myFunction().then(
  function (value) {
    printLog(value);
  },
  function (error) {
    printLog(error);
  }
);

async function myDisplay() {
  let myPromise = new Promise(function (success, error) {
    success("Success Again!");
  });
  console.log(await myPromise);
}
myDisplay();

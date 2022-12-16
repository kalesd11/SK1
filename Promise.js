function NewPromise(number) {
  return new Promise((resolve, reject) => {
    if (number > 50) {
      resolve("Done");
    } else {
      reject("Rejected");
    }
  });
}

let onResolve = (value) => {
  console.log(value);
};

let onReject = (error) => {
  console.log(error);
};

NewPromise(50).then(onResolve).catch(onReject);

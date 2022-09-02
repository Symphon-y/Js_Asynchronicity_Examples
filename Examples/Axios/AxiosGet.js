// Global Variables
const axios = require('axios');

// Raw Axios Get Request
callstackOrder++;
console.log(`CallStack Order: ${callstackOrder}`);
axios
  .get('https://catfact.ninja/fact')
  .then((resp) => {
    console.log(resp.data);
  })
  .catch((err) => {
    console.log(err);
  });

callstackOrder++;
console.log(`CallStack Order: ${callstackOrder}`);

// Async Arrow Function | Try/Catch
const asynchronousFunction = async () => {
  try {
    let data = await axios.get('https://catfact.ninja/fact');
    console.log(data.data);
  } catch (err) {
    console.log(err);
  }
};

asynchronousFunction();

// New Promise
const newPromise = new Promise((resolve, reject) => {
  resolve(axios.get('https://catfact.ninja/fact'));
  reject((err) => {
    console.log(err);
  });
})
  .then((data) => {
    console.log(data.data);
  })
  .catch((err) => {
    console.log(err);
  });

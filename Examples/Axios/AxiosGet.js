// Global Variables
const axios = require('axios');

// Raw Axios Get Request
axios
  .get('https://catfact.ninja/fact')
  .then((resp) => {
    console.log(resp.data);
  })
  .catch((err) => {
    console.log(err);
  });

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

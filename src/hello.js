const getWorld = () => new Promise((resolve) => {
  setTimeout(() => resolve(' world'), 500);
});

const hello = () => new Promise((resolve) => {
  getWorld().then(result => {
    resolve('hello' + result);
  });
});

export default hello;

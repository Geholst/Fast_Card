module.exports = function start() {
  let count = 0;
  const intervalID = setInterval(countUp, 1000);
  function countUp() {
    count++;
    console.log("count: ", count);
  }
};

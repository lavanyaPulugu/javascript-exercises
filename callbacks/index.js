const message = function () {
  console.log("this is a collaback function");
};
setTimeout(message, 3000);
//by using arrow function

setTimeout(() => {
  console.log("this is a arrow collaback function");
}, 5000);

document.querySelector("#callback-btn").addEventListener("click", () => {
  console.log("this is a event collaback function");
});

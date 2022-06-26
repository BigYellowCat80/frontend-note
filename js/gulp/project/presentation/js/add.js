
let add = (a, b) => a + b;

window.onload = function () {
  Array.from(document.querySelectorAll('.box'))
    .forEach(element => {
      element.onclick = function () {
        console.log(this.innerHTML);
      };
    });
}
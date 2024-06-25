// //구조분해할당 배열
// const color = ["pink", "purple", "green", "yellow", "blue"];

// color.push = "aquagreen";

// const [a, b] = color;

// console.log(a, b);

// //구조분해 할당 객체

// const user = [{
//   isLoggind: true,
//   name: "홍길동",
//   age: "24",
//   gender: "male",
//   role: "admin",

// },];

// const { name, age } = user;
// // const name = user.name
// // const age = user.age
// // 와 같음
// console.log(name, age);

const conterNum = document.querySelector(".exchange-num");
const addNum = document.querySelector(".increase-btn");
const minusNum = document.querySelector(".decrease-btn");
let counter = 0;
addNum.addEventListener("click", () => plusNumber());
minusNum.addEventListener("click", () => minusNumber());

function plusNumber() {
  counter = counter + 1;
  conterNum.innerHTML = `
 <h1 class="has-text-primary is-size-1 exchange-num">${counter}</h1>`;
}

function minusNumber() {
  counter = counter - 1;
  conterNum.innerHTML = `
   <h1 class="has-text-primary is-size-1 exchange-num">${counter}</h1>`;
}

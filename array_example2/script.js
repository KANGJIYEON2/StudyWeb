const hobbies = ["Sports", "Cooking"];

hobbies.push("Reading"); //맨뒤에 추가
hobbies.unshift("Coding"); //맨앞에 추가
hobbies.pop(); //삭제된 요소를 반환
hobbies.shift();
console.log(hobbies);

hobbies[0] = "Coding"; // 해당 인덱스를 바꿈
console.log(hobbies);

hobbies.splice(0, 1, "Good Food", "Singing");
console.log(hobbies);

const hobbiesResults = hobbies.concat(["Study", "Eating"]); //push랑 비슷

console.log(hobbiesResults);
console.log(hobbiesResults.indexOf("Study")); // 인덱스 검사

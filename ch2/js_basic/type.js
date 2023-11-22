const num = 1;
console.log(typeof num); // number

// const hello = "hello world!";
// const hello = "hello world! " + num;
const hello = `hello world! ${num}`; // 가독성이 더 좋음.
console.log(typeof hello); // string

const boo = true;
console.log(typeof boo); // boolean

const obj = {
    name: "이수현",
    job: "student",
    school: "soongsil university",
};
console.log(obj); // { name: '이수현', job: 'student', school: 'soongsil university' }
console.log(typeof obj); // object

let undef;
console.log(undef); // undefined 
console.log(typeof undef) // undefined

const nul = null;
console.log(typeof nul); // object
console.log(null); // null
// 함수 선언 기본
function foo() {
    console.log("hi");
}

foo();

// 함수를 변수에 할당
const f0 = function (x) {
    return x * x;
}

console.log(f0(3));

// 화살표 함수
const f1 = (x) => {
    return x + 1;
}

console.log(f1(4));

// 함수에 인자로 함수 전달
function map(fn, arr) {
  const result = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    result[i] = fn(arr[i]);
  }
  return result;
}

const numbers = [0, 1, 2, 5, 10];
const cube = map(f0, numbers);
// const cube = map(f1, numbers);
console.log(cube);
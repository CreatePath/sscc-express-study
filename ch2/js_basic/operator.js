// 산술 연산자
const a = 12;
const b = 5;

console.log(a + b); // 17
console.log(a - b); // 7
console.log(a * b); // 60
console.log(a / b); // 2.4
console.log(a % b); // 2

// 논리 연산자
const c = 0;
console.log(a == c); // false
console.log(1 == '1'); // true
console.log(1 === '1'); //false
console.log(a != c); // true
console.log(false || true); // true
console.log(false && true); // false

// null 병합 연산자 ??
// null, undefined를 구분하기 위해 사용.

// ||: falsy값 (0, '', false, NaN, null, undefined)일 때 뒤로 넘어감.
console.log('' || a); // 12
console.log(NaN || a); // 12

// ??: null과 undefined일 때만 뒤로 넘어감.
console.log(undefined ?? a); // 12
console.log(null ?? a); // 12
console.log(0 || a); // 0


// 옵셔널 체이닝: null 또는 undefined 속성을 조회할 경우 에러가 발생하는 것을 막음.
const o = {};
console.log(o.a);

const nl = null;
// try { // 예외 처리
//     console.log(nl.d);
// } catch (e) {
//     console.error(e);
// }

console.log(c?.d);
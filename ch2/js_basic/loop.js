for (let i = 0; i < 10; i++) {
    // console.log에는 개행문자가 자동으로 포함되므로 process.stdout.write 사용
    process.stdout.write(i + " ");
} // 0 1 2 3 4 5 6 7 8 9 
console.log();


const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    process.stdout.write(arr[i] + " ");
} // 1 2 3 4 5
console.log();


// for ... in ... 
// 객체 안에 있는 속성의 이름을 하나씩 꺼내 반복

// 배열의 경우, index 반환
for (let a in arr) {
    // a는 string으로 나오므로 주의!!!
    if (a == 3) continue;
    process.stdout.write(`arr[${a}]: ${arr[a]} `);
} // arr[0]: 1 arr[1]: 2 arr[2]: 3 arr[3]: 4 arr[4]: 5
console.log();


let obj = { name: "이수현", age: 21 };
for (let key in obj) {
    process.stdout.write(`${key}: ${obj[key]} `);
} // name: 이수현 age: 21
console.log();


// for ... of ...
// iterable 객체(배열, Map, Set 등)의 값을 순서대로 출력
// 배열의 경우, 값이 나옴.
for (let a of arr) {
    if (a === 3) break;
    process.stdout.write(`${a} `);
} // 1 2
console.log();

let n = 0;
while (n < 3) {
    console.log(n);
    n++;
}
// 콜백 함수
function mulConst(added) {
    const mul = added * 5;
    console.log(mul);
}

function addConst(a2, cb) {
    const added = a2 + 1;
    console.log(added);
    cb(added);
}

function foo(a, cb) {
    const a2 = a**2;
    cb(a2, mulConst);
}

foo(4, addConst); // 17 85

// 콜백 지옥
function taskA(a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 2000);
}

function taskB(a, cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 2000);
}

function taskC(a, cb) {
  setTimeout(() => {
    const res = a * (-1);
    cb(res);
  }, 2000);
}

taskA(1, 2, (res_a) => {
  taskB(res_a, (res_b) => {
    taskC(res_b, (res_c) => {
      console.log("taskC Result : ", res_c);
    });
  });
});


// Promise

// 콜백 함수를 사용하면 너무 많은 콜백이 들어가는 콜백 지옥 발생.
// ES2015부터 Promise를 통해 콜백 지옥 극복
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("성공!");
    }, 1000);
});

console.log("promise p1 실행 중...");
p1.then((msg) => console.log(msg));


let ptaskA = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a + b;
            resolve(res);
        }, 1000);
    });
} 

console.log("promise ptask 실행 시작...");
ptaskA(1, 2)
.then((res_A) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = res_A * 2;
            resolve(res);
        }, 2000); 
    });
})
.then((res_B) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = res_B * (-1);
            resolve(res);
        }, 2000); 
    });
})
.then((res_C) => console.log(`prmise ptask result: ${res_C}`))
.catch((err) => console.log(err));

console.log("promise ptask는 언제 끝나나요?");

// async - await
// await를 통해 비동기 코드를 동기 방식으로 동작하도록 함.
// await를 쓰면 호출한 비동기 함수가 결과를 return 할 때까지 대기.
// 즉, sync - blocking 방식이 됨.
let atask = async function (a, b) {
    console.log("atask 시작!");
    
    console.log("res_A 계산 시작");

    const res_A = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });

    console.log(`atask function: res_A = ${res_A}`);

    console.log("res_B 계산 시작");
    const res_B = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(res_A * 2);
        }, 2000);
    });

    console.log(`atask function: res_B = ${res_B}`);

    console.log("res_C 계산 시작");
    const res_C = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(res_B * (-1));
        }, 2000);
    });

    console.log(`atask function: res_C = ${res_C}`);

    return res_C;
}

atask(1, 2).then((result) => console.log(`atask result: ${result}`));
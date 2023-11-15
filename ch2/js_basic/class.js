// JS에서 객체는 프로토타입(파이썬 dict와 유사)
let obj = {
    name: "이수현",
    job: "student",
    age: 21,
};
console.log(obj); // { name: '이수현', job: 'student', age: 21 }

// key와 value 값이 같다면 key를 명시하지 않아도 됨.
const name = "양념치킨";
const job = "chicken";
const age = 30;

let obj2 = {
    name, job, age
};
console.log(obj2); // { name: '양념치킨', job: 'chicken', age: 30 }

// class는 객체를 생성하기 위한 틀
class Person {
    constructor (name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }

    static weAreHuman() {
        return `우리는 인간이다`;
    }

    greet() {
        return `안녕하세요! 저는 ${this.age}살 ${this.name}이고, 직업은 ${this.job}입니다.`
    }
}

const p1 = new Person(name, job, age);
console.log(Person.weAreHuman()); // 우리는 인간이다

const p2 = new Person("이수현", "student", 21);
console.log(Person.weAreHuman()); // 우리는 인간이다

console.log(p1.greet()); // 안녕하세요! 저는 30살 양념치킨이고, 직업은 chicken입니다.
console.log(p2.greet()); // 안녕하세요! 저는 21살 이수현이고, 직업은 student입니다.
// JS 문자열 선언
// var str = 'hello';

// TS 문자열 선언
let str: string = 'hello';

// TS 숫자 선언
let num: number = 10;

// TS 배열 선언
let arr: Array<number> = [1, 2, 3]; //number type을 담는 배열
let heroes: Array<string> = ['a', 'b', 'c', 10] // type이 어긋나는 경우, 경고 줌
let items: number[] = [1, 2, 3];

// Ts 튜플
let address: [string, number] = ['gangnam', 100];

// Ts 객체
let obj: object = {};
// let person: object = {
//     name: 'capt',
//     age: 100
// };
let person: { 'name': string, age: number } = {
    name: 'thor',
    age: 1000
}

// TS 진위값
let show: boolean = true;


import { genericFunctionArrow, printObject } from './generics/generics';
import { Hero, Villain } from './interfaces';

printObject(123);
printObject(new Date());
printObject({a:1, b:2, c:3});
printObject([1,2,3,4,5]);
printObject('Hola');

const name:string = 'Fernando';

console.log(genericFunctionArrow(3.141618).toFixed(2));
console.log(genericFunctionArrow(name).toUpperCase());
console.log(genericFunctionArrow(new Date()).getDate());

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Wilson',
    dangerLevel: 130
}

console.log(genericFunctionArrow<Hero>(deadpool).realName);

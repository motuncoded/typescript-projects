/* 

Typescript is a programming tool that can be compiled into javascript, it is a superset of javascript
it helps write javascript in a less error way.
to write in an accurate and precise manner.
write typescript in less amount of code is wrong but can be used in programs with so much code.

Typescript => typesafety
to install typescript globally

npm install -g typescript
to check the version 
tsc -v

on a project 
npm install typeescript --save-dev

to compile to 
tsc <projectname>

*/



console.log("Hello world");

let user = {
    name: "Motunrayo",
    age: 20,
}
console.log(user.name)
//console.log(user.email) error


// to compile to javascript => tsc intro.ts
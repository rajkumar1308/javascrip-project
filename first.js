// var ary =[
//     ["raj",20,'male', "btech"],
//     ["yash",22,'male', "btech"],
//     ["devash",18,'male', "bsc"],
//     ["abhishek",21,'male', "bcom"],
// ];
// console.log(ary)

// var a =["raj",'male', "btech"]
// // console.log(a);
// a[0]="yash";
// delete a[1]
// // console.log(a);
// var b= ["arj","bader", "abhi", "raj", "raavi","yash"]
// var c= ["nirja", "pranjal", "arya", "aditi"]
// console.log(b);

// b.sort();
// b.reverse();
// b.pop();
//  b.push("rahul")
//  b.shift()   remove the first element from array
//  b.unshift("rahul");   add the element at first inarray
//var d= c.concat(b,a);
// var d = c.join(" ")   add all value in one string
// var z= b.slice(2,5);  it give the value from abhi to raavi 
//  b.splice(2,0,"neha","shadhha")  you can add element between array or delete
// var z= Array.isArray(b)
// var z = b.includes("raj");
// var z = [10,15,18,20,22];
// var x = z.some(checkAdult); // check only one value true for some   || every function check every value in array then give true
// console.log(x);
// function checkAdult(z){
//     return z>25
// }

// find(function name) -- return the value of the first element in array that pass the test
// filter function give all value that pass a Text 
//  toString -- convert an array into a String

// b.forEach(function(value){
//  console.log(value);
// })

// [] --> for Array
// { } --> for Object

/*   
var a= {
    fname: "raj",
    lname : 'rathi',
    age :21,
    email: 'rajrati9527@gmail.com',
    favmovie :['dhoom', 'sholay','marder'],
    salary : function(){
        return 2000;
    },
    fullname : function(){
        return this.fname + " "+ this.lname;
    }

};
console.log(a);
// console.log(a.favmovie[1]);
console.log(a.salary());
console.log(a.fullname());
*/

// another methon for creating object 
/*
var person = new Object();
person.fname = 'rajkumar';
person.lname = 'rathi';
person.age = 22
person.salary = 2000
// console.log(person);

var student = [
    {name:'ram', age: 15},
    {name:'devang', age:20},
    {name: 'yasg', ahe:25}
];
// console.log(student);
// for in loop 
for(var key in student){
    console.log(student[key]);
}

*/

// var ary = [
//     {fname :'yahoo', lname:'baba'},
//     {fname: 'raj', lname:'rathi'}
// ]
// var b = ary.map(test);
// // console.log(b);
// function test(x){
// return x.fname+ " "+ x.lname;
// }


var str = "   javascript is a great language   ";
// var a = str.toUpperCase();
// var a= str.includes("gre")
// var a = str.startsWith("java")
// var a= str.endsWith("aage")
// var a = str.search("is")
// var a = str.replace("javascript", "php")
// var a= str.trim();  // remove the space 


// console.log(a);
/*
// addeventlistener 

document.getElementById("header").onclick = abc;  // function name
function abc(){
    document.getElementById("header").style.backgroundColor = "green";
}
// ass event listener() method
document.getElementById("header").addEventListener("click", abc);  // function name
function abc(){
    document.getElementById("header").style.backgroundColor = "green";
}
// OR 
// document.getElementById("header").addEventListener("click", zxc(){
//     this.style.backgroundColor = "green"
   
// });

*/

var newElement = document.createElement("this is just text")
console.log(newElement);

function submitfunction(){
    var x = document.getElementById("fname").ariaValueMax;
    alert("hello"+x);
}

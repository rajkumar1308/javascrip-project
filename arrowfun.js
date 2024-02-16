/*
let welcome = function(){
    return "hello"
}
// console.log(welcome());

// arrow function
let first = (name, age) => {
    return `hello ${name} & ${age}`
}
console.log(first("raj",21));
*/

/*
// rest operator  ...argument
function sum(name, ...args){
// console.log(arguments);
let sum=0;
for (let i in args) {
  sum +=args[i];
}
// console.log(sum);
}

sum('eaj',20,30,40,50);
sum(20,30,40);


// spread operator
function sum(name, ...args){
    // console.log(arguments);
    let sum=0;
    for (let i in args) {
      sum +=args[i];
    }
    //console.log(sum);
    }
    var arr = [10,20,30,40,50];
    sum("raj",...arr)

    var arr1 = [10,20,30,40];
    var arr2 = arr1;
    console.log(arr2);

    var arr3 = [50,70];
    var arr4 = [...arr1,...arr3];
    console.log(arr4);

 */   

    /*
// OOPS 
class student{
    constructor(name){                      // bu default it run
         this.studentname = name;         // variable
        console.log("hello contructor ");
    }

    hello(){
         console.log(" hii method " + this.studentname);
    }
    static staticmethod(){
        console.log("static method");
    }
}

let a = new student("raj ");
// a.name = "rajkumar";
a.hello();
student.staticmethod();

*/

// inheritance 

class employee{
    constructor(name){
        this.empname = name
        console.log("constuctor : employee " + name);
    }
    info(){
        console.log("employee name" + this.empname);
    }
}

class manager extends employee{
//  info(){
//      super.info()
//      console.log("manager name : " +this.empname);
//  }
}


let ab = new manager("rajkumar ");
ab.info();



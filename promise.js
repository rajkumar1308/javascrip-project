// syntax let prom = new promise(function(reslove, reject){    })

/*
 // let complete = true;
 function prom(complete){
return new Promise(function(reslove, reject){
    if(complete){
        reslove("i am successfull");
    }else{
        reject("i am failed")
    }
});


let onfulfilment = (result) => {
   console.log(result);
}
let onrejection = (error) =>{
    console.log(error);
}
prom(true).then(onfulfilment);
prom(true).catch(onrejection);



function abc(a,b){
    return new Promise(function(reslove,reject){
        console.log("fetching data , please wait");
        var c = a/b;
        setTimeout(() =>{ 
        if(a,b){
            console.log(`your answer is ${c}`);
        }else{
            console.log("failed to complete");
        }
    },3000);

    });
}
abc(9,7).then((result) =>{
    console.log(result);
}).catch((error) =>{
    console.log(error);
})


function sum(x,y){
    return new Promise(function(reslove, reject){
        console.log("please wait ..");
        var z = x+y;
        setTimeout(() =>{
            if(z > 10){
                console.log(`your sum is ${z}`);
            }else{
                console.log("failled..");
            }
        }, 3000)
    })
}

sum(2,5).then((result) =>{
    console.log(result)
}).catch((error) =>{
    console.log(error);
})

*/



/*
function prom(){
    return new Promise(function(reslove, reject){
        console.log("fetching data ..");
        setTimeout(()=>{
            $.get("https://jsonplaceholder.typicode.com/posts",function(data){
                reslove(data);
            }).fail( err => {
                reject(" fail to loading")
            })
        }, 2000)
    })
}

prom().then((result)=>{
    console.log(result);
}).catch((error) =>{
    console.log(error);
})
*/

// promise all

let p1 = new Promise((resolve,reject) =>{
    setTimeout(() => {
        console.log(`the first promise has resloved`);
        resolve(10)
    }, 1*1000);
});
let p2 = new Promise((resolve,reject) =>{
    setTimeout(() => {
        console.log(`the second promise has resloved`);
        resolve(20)
    }, 2*1000);
});
let p3 = new Promise((resolve,reject) =>{
    setTimeout(() => {
        console.log(`the third promise has resloved`);
        resolve(30)
    }, 3*1000);
});

var total = 0;
Promise.all([p1,p2,p3]).then((result) =>{

    for(var i in result){
       total += result[i];
    }
    
    console.log(`Result: ${total}`);
}).catch((error) =>{
   console.log(`reeor ${error}`);
})

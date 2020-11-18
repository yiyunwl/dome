
Array.prototype.forEach = function(fn , thisArg){
    
    if(typeof fn !== 'function'){
        throw new TypeError(fn + 'This is no function')
    }

    if(!Array.isArray(arr)){
        throw new TypeError('This is no isArray')
    }

    for(var index=0;index<arr[index];index++){
        fn.call(thisArg,arr[index],index,arr)
    }

}

function name(params) {
    console.log(params)
}

var arr = [1 , 2 , 3] ;

arr.forEach(name)


// Array.prototype.filter=function(fn){
//     if(typeof fn !=='function'){
//         throw '参数必须是函数'
//     }
//     let arr = this;
//     if(!Array.isArray(arr)){
//         throw "必须是数组才可以使用foreach方法"
//     }
//     let rssult = [];
//     for(var index=0;index<arr.length;index++){
//         let invokedreturn = fn(arr[index],index,arr);
//         if(invokedReturn){
//              result.push(arr[index])
//         }
//     }
//     return result;
// }

// Array.prototype.reduce=function(fn,accumulator){
//     if(typeof fn !== 'function'){
//         throw '参数必须是一个函数'
//     }
//     let arr =this;
//     if(!Array.isArray(arr)){
//         throw '必须是数组才能使用forEach方法'
//     }
//     let index=0;
//     if(!accumulator){
//         index=1;
//         accumulator = arr[0];
//     }
//     for(;index<arr[i];index++){
//         let invokedReturn = fn(accumulator,arr[index],index,arr)
//         accumulator = invokedReturn;
//     }
//     return accumulator;
// }



// Array.prototype.map=function(fn){
//     if(typeof fn !== 'function'){
//         throw '参数必须是一个函数'
//     }
    
//     let arr = this;
//     if(!Array.isArray(arr)){
//         throw '必须是数组才能使用forEach方法'
//     }
//     let result = [];
//     for(var index=0;index<arr.length;index++){
//         result.push(fn(arr[index]))
//     }
//     return result;
// }
// function ArrReduce(e){
//     return e*2;
// }
// var arr=[1,2,4];
// var res = arr.map(ArrReduce)




// // Array.prototype.forEach=function(fn){
// //     if(typeof fn !== 'function'){
// //         throw '参数必须为函数'
// //     }
// //     let arr = this;
// //     if(!Array.isArray(arr)){
// //         throw '必须是数组才能使用foreach方法'
// //     }
// //     for(var index=0;index<arr.length;index++){
// //         fn(arr[index],index,arr)
// //     }
// // }



// Array.prototype.filter=function(fn){
//     let result = [];
//     for(var index=0;index<arr.length;index++){
//         if(fn(arr[index],index,arr)){
//             result.push(fn(arr[index],index,arr))
//         }
//     }
//     return filter;
// }

// Array.prototype.reduce=function(fn,accumulator){
//     let arr = this;
//     let index=0;
//     if(!accumulator){
//         index=0;
//         accumulator=arr[0]
//     }

//     for(;index<arr.length;index++){
//         let invokedReturn = fn(accumulator,arr[index],index,arr)
//         invokedReturn= accumulator;
//     }
//     return accumulator;
// }


// Array.prototype.map=function(fn){
//     let arr =this;
//     for(var index=0;index<arr.length;index++){
//         fn(arr[index],index,arr)
//     }
// }
// function ArrReduce(e){
//     return e*2
// }
// var arr=[1,12,3,3,4];
// var res=arr.map(ArrReduce)
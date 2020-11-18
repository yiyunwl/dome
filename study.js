
    var obj={
        name:'张三',
        age:'18'
    }
    console.log(obj.name+obj.age)
    console.log(obj['name'])

    var num=[];
    num.push('1','2','3')
    console.log(num)

num[5]='李四';

console.log(num)
console.log(Object.keys(num))

console.log(num.length)

var all=['小明','小黑','小红','小花','我是小白','小甜'];


// all.forEach(element=>{
// console.log(element)
// })


for(var y of all){
    console.log(y)
}


// var list = new Map([['name','张三'],['age','18'],['love','唱歌']])

// for(var lists of list){
//     console.log(lists)
    
// }


console.log(all)
var alls = all.filter(item=>item.length>3)


console.log(alls)


function shai(texts){
    return texts >= 10;
}

var w=[10,20,5,7,5,8,100,1002].filter(shai)

console.log(w)






function nums(value){
    return value >= 3;
}
var arrs = [1,2,3,4,5,6,7,8,'我已经更新了,hhh'];


console.log(arrs.filter(nums))
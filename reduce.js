
var list=[1,2,4,5,5,6];
var q=list.reduce(function (num,all) {
  return  num+all;
  console.log(num+all)
},0)

console.log(q)



var obj=[
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5}
]

var all = obj.reduce(function (add,alls) {
    return add+alls.id
},0)

console.log(all)



var objs=[[1,2,21,45,6,6,6,66,],[3,4],[5,6],[7,8],[9,10]];

var newobj=objs.reduce(function (add,alls) {
    return add.concat(alls)
})

console.log(newobj)


var newobjs=newobj.reduce(function (nums,alls) {
    return nums+alls
})

console.log(newobjs)


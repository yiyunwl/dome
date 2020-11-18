
    var a=[1,5,3,33,52,1,,4324,23,434,34,,324,324,,3423,45,4,4,45,];
    var b=[4,4,57,8,98,9,9,9,1,3,45,6,67,,78,9,454];
    var c=a.concat(b);
    c.sort();
    for(var i=0;i<c.length;i++){
        if(c[i]==c[i+1]){
            c.splice(i,1)
            i--;
        }
    }

console.log(c)

var d=c.reduce(function (a,b) {
    return a+b;
})

console.log(d)



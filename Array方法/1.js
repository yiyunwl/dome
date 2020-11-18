var arr = [1,2,23,2,4,4,4,4,4,4,434,224,441,1,2];
arr.sort()

for(var i=0;i<arr.length;i++){
    if(arr[i] == arr[i+1]){
        arr.splice(i,1)
        i--;
    }
}
console.log(arr)


console.log(arr.reverse())
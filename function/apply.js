var nums = [5, 6, 7, 8]

var max = Math.max.apply(null,nums);
// console.log(max)

var min = Math.min.apply(null,nums)
// console.log(min)

for (var i = 0; i < nums.length; i++ ) {

    if (nums[i] > max)
        max = nums[i];
        // console.log(max)
        
    if (nums[i] < min)
        min = nums[i];
        // console.log(min)
}



var arr1 = ['a' , 'b' , 'c'];

var arr2 = [1 , 2 , 3 , 5 , 6 , 5 , 6 , 5 , 1 , 1 , 2 , 3];

var arr3 = ['您' , '好' ];

arr1.push.apply(arr1,arr2);

console.log(arr1);

arr3.push.apply(arr3,arr1);

console.log(arr3);



var arr4 = ['我'];

var arr5 = arr3.concat(arr4);
console.log(arr5)

arr5.sort()

for(var i = 0; i < arr5.length ; i++){
    if( arr5[i] == arr5[i+1] ){
        arr5.splice(i,1)
       i--;
    }
}
console.log(arr5)

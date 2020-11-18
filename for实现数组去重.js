
//     var arr = [1, 32, 5, 5, 5, 6, 6, 6, 6, 77, 7, 7];
//     arr.sort();

// for(var i=0;i<arr.length;i++){
//     if(arr[i]==arr[i+1]){
//         arr.splice(i,1)
//         i--;
//     }
// }
// console.log(arr)


var arr = ['fang','fangfa','fangs','fang','fangfa','fangs','fangs','fangs','fangs','fangs','fangs','fangfa','fang','fang'];

for(var i=0;i<arr.length;i++){
    console.log(arr[i])
    for(var j=i+1;j<arr.length;j++){
        console.log('--->'+arr[j])
        if(arr[i] == arr[j]){
            arr.splice(j,1);
            j--;
        }
    }
}
console.log(arr)

//     var obj = [
//         { id: -1 },
//         { id: 0 },
//         { id: 3 },
//         { id: 12.2 },
//         {},
//         { id: null },
//         { id: NaN },
//         { id: 'undefined' },
//         { id: 5},
//         { id:8.66 }
//     ];


// var invalidEntries = 0;

// function isNumber(obj) {
//   return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
// }

// function filterByID(item) {
//   if (isNumber(item.id) && item.id !== 0) {
//     return true;
//   } 
//   invalidEntries++;
//   return false; 
// }

// var arrByID = obj.filter(filterByID);

// console.log( arrByID); 


var fruits=['apple','banner','mango'];
function filterItems(infos) {
  // return fruits.filter(function(el) {
  //     return el.toLowerCase().indexOf(infos.toLowerCase()) > -1;
  // })
}


console.log(filterItems('ap'))


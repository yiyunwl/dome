var fun = new RegExp('138');
var str = '7';

result = fun.test(str)

console.log(result)


var strs = /[a-z]/;
console.log(strs.test('aaa'))


var str1 = /a{3}/
console.log(str1.test('aaa'))


var str2 = /1[3-9][0-9]{9}/;

console.log(str2.test('130202020202'));

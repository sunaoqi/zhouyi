var arr = [1, 2, 3, 1, 2, 3];
var newarr = [];
for (var i = 0; i < arr.length; i++) {
    if (newarr.indexOf(arr[i]) === -1) {
        newarr.push(arr[i]);
    }
}
console.log(newarr);
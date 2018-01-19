var arr = [13, 98, 133, 458];
var i = 0;
alert('U have array: ' + arr + '.');
while (i < arr.length) {
  arr[arr.length - i] = arr[arr.length - i - 1];
  i++;
}
var first_elem = prompt('Write a number, which will be first in array');
arr[0] = first_elem;
alert('New array:  ' + arr + '.');

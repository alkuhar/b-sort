/**
* Sorts an array of numbers using bubble sort.
*
* @param {array} arr Array of numbers
* @returns {array} arr Returns sorted array of numbers
*
*/

function bSort(array) {
  var i = -1;
  var length = array.length;
  while(++i < length) {
    _sort(array);
  }
}

function _sort(array) {
  var i = -1;
  var length = array.length - 1;
  while(++i < length) {
    if(array[i] > array[i+1]) {
      var temp = array[i+1];
      array[i+1] = array[i];
      array[i] = temp;
    }
  }
}

module.exports = bSort;

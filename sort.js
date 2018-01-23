const util = require('util');

//--------------------------------
//Insertion Sort
//--------------------------------
function insert(arr, rightIndex, value) {
  //setting i equal to the rightIndex passed in
  let i = rightIndex; //6
  //while i is more than 0 and current index is more than value
  while (i >= 0 && arr[i] > value) {
    //set index plus 1 equal to value at index i
    arr[i + 1] = arr[i];
    //decrement i by 1
    i -= 1;
  }
  //index i plus 1 set to value
  arr[i + 1] = value;
}

const insertionSort = arr => {
  let sorted = [arr.shift()];

  for (let index = arr.length - 1; index >= 0; index--) {
    insert(sorted, sorted.length - 1, arr.pop());
  }
  return sorted;
};

// console.log(insertionSort(array));

//--------------------------------
// Bubble Sort
//--------------------------------

function BubbleSort(arr) {
  let sorted = false;
  let placeholder;
  let i = 0;

  while (sorted !== true || i !== arr.length - 1) {
    if (i === 0) {
      sorted = true;
    }

    if (arr[i] > arr[i + 1]) {
      placeholder = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = placeholder;
      sorted = false;
    }

    i >= arr.length - 1 ? (i = 0) : i++;
  }

  return arr;
}

//--------------------------------
// Merge Sort
//--------------------------------

const merge = (left, right) => {
  const newArr = [];
  const lLen = left.length;
  const rLen = right.length;
  let l = 0;
  let r = 0;

  while (l < lLen && r < rLen) {
    left[l] < right[r] ? newArr.push(left[l++]) : newArr.push(right[r++]);
  }

  return newArr.concat(left.slice(l)).concat(right.slice(r));
};

const array = n => {
  let result = [];
  for (let x = 0; x <= n - 1; x++) {
    result.push(Math.ceil(Math.random(0, 1) * 1000));
  }
  return result;
};

function MergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let left = array.slice(0, array.length / 2);
  let right = array.slice(array.length / 2);
  return merge(MergeSort(left), MergeSort(right));
}

//--------------------------------
// Benchmarking
//--------------------------------

const benchmark = array => {
  let methods = [MergeSort, quickSort];
  let methodNames = ['MergeSort', 'QuickSort'];

  methods.forEach(method => {
    let startTime = Date.now();
    method(array(100000));
    let endTime = Date.now();
    console.log(
      `${methodNames.shift()} takes ${endTime - startTime}ms to complete.`
    );
  });
};

function quickSort(arr, left, right) {
  var len = arr.length,
    pivot,
    partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);

    //sort left and right
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, pivot, left, right) {
  var pivotValue = arr[pivot],
    partitionIndex = left;

  for (var i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

benchmark(array);

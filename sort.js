const util = require("util");

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

// const merge = (left, right) => {
//   const newArray = [];
//   let val1 = null;
//   let val2 = null;
//   while (left.length || right.length) {
//     val1 = val1 ? val1 : left.shift();
//     val2 = val2 ? val2 : right.shift();
//     if (val1 > val2) {
//       newArray.push(val2);
//       val2 = null;
//     } else {
//       newArray.push(val1);
//       val1 = null;
//     }
//   }
//   val1 ? newArray.push(val1) : console.log("no val1");
//   val2 ? newArray.push(val2) : console.log("no val2");
//   return newArray;
// };

const merge = (left, right) => {
  const newArr = [];
  const lLen = left.length;
  const rLen = right.length;
  let l = 0;
  let r = 0;

  while (l < lLen && r < rLen) {
    if (left[l] < right[r]) {
      newArr.push(left[l++]);
    } else {
      newArr.push(right[r++]);
    }
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
  let methods = [insertionSort, BubbleSort, MergeSort];
  let methodNames = ["insertionSort", "BubbleSort", "MergeSort"];

  methods.forEach(method => {
    let startTime = Date.now();
    method(array(10000));
    let endTime = Date.now();
    console.log(
      `${methodNames.shift()} takes ${endTime - startTime}ms to complete.`
    );
  });
};

benchmark(array);

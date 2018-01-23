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

const array = [51386, 9, 1, 8, 4, 7, 3, 2, 100];

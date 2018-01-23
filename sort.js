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

const array = [1, 9, 8, 4, 7, 2, 3];

const insertionSort = arr => {
  for (i = arr[arr.length - 1]; i >= 0; i--) {
    insert(arr, arr.length - 2, arr.pop());
    console.log(arr);
  }
  return arr;
};

insertionSort(array);

import { swap, cloneArray, findMinIndex } from "./SortingUtils";

export const bubbleSort = array => {
  const newArray = cloneArray(array);
  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < newArray.length; j++) {
      if (j > 0 && newArray[j] < newArray[j - 1]) {
        swap(newArray, j, j - 1);
      }
    }
  }
  console.log(newArray);
  return newArray;
};

export const selectionSort = array => {
  const newArray = cloneArray(array);
  for (let i = 0; i < newArray.length; i++) {
    const minIndex = findMinIndex(newArray, i);
    swap(newArray, i, minIndex);
  }
  return newArray;
};

export const insertionSort = array => {
  const newArray = cloneArray(array);
  let i = 1;
  while (i < newArray.length) {
    let j = i;
    while (j > 0 && newArray[j - 1] > newArray[j]) {
      swap(newArray, j, j - 1);
      j = j - 1;
    }
    i = i + 1;
  }
  return newArray;
};

export const quickSort = array => {
  const newArray = cloneArray(array);
  const partition = (array, low, high) => {
    let pivot = array[high];
    let i = low;
    for (let j = low; j <= high; j++) {
      if (array[j] < pivot) {
        swap(array, i, j);
        i = i + 1;
      }
    }
    swap(array, i, high);
    return i;
  };
  const sort = (subArray, low, high) => {
    if (low < high) {
      const p = partition(subArray, low, high);
      sort(subArray, low, p - 1);
      sort(subArray, p + 1, high);
    }
  };
  sort(newArray, 0, newArray.length - 1);
  return newArray;
};

export const generateRandomArray = (length, minValue, maxValue) => {
  let array = new Array(length);
  for (let i = 0; i < length; i++) {
    array[i] = Math.floor(Math.random() * (maxValue - minValue) + minValue);
  }
  return array;
};

export const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

export const cloneArray = array => {
  return array.slice(0);
};

export const findMinIndex = (array, startingMinIndex) => {
  let min = array[startingMinIndex];
  let minIndex = startingMinIndex;
  for (let i = startingMinIndex; i < array.length; i++) {
    if (array[i] < min) {
      minIndex = i;
      min = array[i];
    }
  }
  return minIndex;
};

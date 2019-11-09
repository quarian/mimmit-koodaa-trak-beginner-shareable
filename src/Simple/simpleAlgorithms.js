export const findMax = arrayLike => {
  let max = arrayLike[0];
  for (let i = 0; i < arrayLike.length; i++) {
    if (arrayLike[i] > max) {
      max = arrayLike[i];
    }
  }
  return max;
};

export const linearSearch = (arrayLike, target) => {
  for (let i = 0; i < arrayLike.length; i++) {
    if (arrayLike[i] === target) {
      return i;
    }
  }
  return -1;
};

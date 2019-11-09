// A variable that can be reassigned is set as follows;

let exampleVariable = 1;

// If you don't need to reassign value for the variable, use const:

const unChangeableVariable = "can't change this";

// A function is defined the following way:

const exampleFunctionWithoutParameters = () => {
  const result = 1;
  return result;
};

const exampleFunctionWithTwoNumberParameters = (
  firstParameter,
  secondParameter
) => {
  return firstParameter + secondParameter;
};

// A loop is decleared as follows

const printTenTimes = () => {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
};

// An array can be accessed with indices.

let exampleArray = ["first", "second", "third"];

// You can access the array the following way - the first item has index of 0

const firstItem = exampleArray[0]; // firstItem === "first"

// You can reassign array values with the index notatiion

exampleArray[1] = "changed"; // exampleArray === ["first", "changed", "second"]

// You can iterate over an array easily like this:

const iterateOverArray = array => {
  for (let i = 0; i < array.length; i++) {
    const elementInArray = array[i]; // No you can do something with this item
  }
};

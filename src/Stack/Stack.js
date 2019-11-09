export class Stack {
  // What is a Class?
  // https://javascript.info/class
  // In shorts, when developing an application you are likely to use a lot the same data structure for different things (e.g. users, products)
  // Classes allow you to create the basic structure (First Name, Last Name, Address etc.) and to not have to recreate this structure every time
  constructor(stack) {
    this.stack = stack ? stack.getStack() : [];
  }
  push(element) {
    // Adds a given element to the stack
    this.stack.push(element);
  }
  pop() {
    // Get the last inserted element in a stack and remove it from the stack
    return this.stack.pop();
  }
  peek() {
    // Shows the last inserted element in a stack
    // e.g. the stack has 5 elements, so we know that the stack has elements in index positions 0 1 2 3 and 4
    // So when we count the length of the stack we receive 5 and if we subtract by 1 (because the first index is 0, not 1!)
    // we get the position of the last element in the stack
    return this.stack[this.stack.length - 1];
  }
  getStack() {
    // Shows the current stack
    return this.stack;
  }
}

export const checkParenthesisBalance = parenthesis => {
  // https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/
  const stack = new Stack(); // We create a new stack using the class Stack
  for (let i = 0; i < parenthesis.length; i++) {
    // Remember, in programming 0 is the first index number!
    // What is a for loop? https://www.w3schools.com/js/js_loop_for.asp
    // How are we passing the parentheses that we wrote in the input text on our page?
    // We do it on StackVisualization.js at line 136
    const current = parenthesis[i]; // We assign the value in the stack at position i to a variable called 'current'
    if ((current === "{") | (current === "(") | (current === "[")) {
      // We check whether our variable current is either of these three brackets
      // We do this check to make sure that we're actually comparing brackets and not other values
      // If it's any of these three values, we add it to the stack that we created
      stack.push(current);
    } else {
      // If we are not having any of the three opening brackets, we might have a closing bracket (or a wrong character)
      const popped = stack.pop(); // In that case, we assign the last value inserted in the stack to a variable called 'popped' and we remove it from the stack
      if (
        (popped === "(" && current !== ")") ||
        (popped === "[" && current !== "]") ||
        (popped === "{" && current !== "}") ||
        !popped
      ) {
        // if current is ) popped needs to be (
        return false;
      }
    }
  }
  return !stack.pop();
};

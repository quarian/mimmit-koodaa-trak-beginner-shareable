import React, { useState } from "react";
import { testStack, parenthesisTestFunction } from "./StackTests";
import { TestVisualisation } from "../TestFrameWork/TestVisualisation";
import { Stack, checkParenthesisBalance } from "./Stack";

import "./StackVisualisation.css";

export const StackPage = () => {
  const [testResults, setTestResults] = useState([]);
  return (
    <div className="StackContainer">
      <h1>Stacks are a classic data structure</h1>
      <h2>
        They date way back to the beginning of computer science, and are still
        useful nowadays
      </h2>
      <p>
        In computer science, a stack is an abstract data type that serves as a
        collection of elements,<br></br>with two principal operations:<br></br>
        push, which adds an element to the collection,<br></br>and pop, which
        removes the most recently added element that was not yet removed.
        <br></br>(from:&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://en.wikipedia.org/wiki/Stack_(abstract_data_type)"
        >
          Wikipedia
        </a>
        )
      </p>
      <hr></hr>
      <div>
        <button onClick={() => setTestResults(testStack(Stack))}>
          Run tests on your stack
        </button>
        {testResults.length > 0 && TestVisualisation(testResults)}
      </div>
      <hr></hr>
      <ParenthesisTester />
      <div>
        <StackVisualisation />
      </div>
    </div>
  );
};

const StackVisualisation = () => {
  const [stack, updateStack] = useState(new Stack());
  return (
    <div className="StackVisualisationContainer">
      <h3>Here a playground to play around with the stack</h3>
      <div className="StackVisualisation">
        <div>
          <button
            onClick={() => {
              const newStack = new Stack(stack);
              newStack.push(Math.floor(Math.random() * 11));
              updateStack(newStack);
            }}
          >
            Push random number into the stack!
          </button>
          <button
            onClick={() => {
              const newStack = new Stack(stack);
              newStack.pop();
              updateStack(newStack);
            }}
          >
            Pop the stack
          </button>
        </div>
        <h4>Your stack looks like this:</h4>
        <div className="Stack">
          <div>
            {stack
              .getStack()
              .slice()
              .reverse()
              .map((item, index) => (
                <p key={index} className="StackItem">
                  {item}
                </p>
              ))}
          </div>
        </div>
        <br></br>
      </div>
      <p>
        <b>push()</b> function is used to insert an element at the top of the
        stack.
        <br></br>
        The element is added to the stack container and the size of the stack is
        <br></br>
        increased by 1.
      </p>
      <p>
        <b>pop()</b> function is used to remove an element from the top of the
        <br></br>
        stack(newest element in the stack). The element is removed to the stack
        <br></br>
        container and the size of the stack is decreased by 1.<br></br>
        <br></br>(from:{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.geeksforgeeks.org/stack-push-and-pop-in-c-stl/"
        >
          GeeksForGeeks
        </a>
        )
      </p>
    </div>
  );
};

const ParenthesisTester = () => {
  const [testString, setTestSring] = useState("");
  const [singleTestResult, setSingleTestResult] = useState(false);
  const [testResults, setTestResults] = useState([]);
  return (
    <div className="ParenthesisTester">
      <h3>Test your stack with parenthesis balance algorithm</h3>
      <p>
        (check:{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/"
        >
          Parenthesis Balance on GeeksForGeeks
        </a>
        )
      </p>
      <label htmlFor="parenthesis-input">Set your test string</label>
      <input
        id="parenthesis-input"
        type="string"
        value={testString}
        onChange={e => setTestSring(e.target.value)}
      />
      <div>
        <button
          onClick={() =>
            setSingleTestResult(checkParenthesisBalance(testString))
          }
        >
          Test your parenthesis balance function on the input above
        </button>
      </div>
      <div>
        {singleTestResult
          ? `The parenthesis are balanced!`
          : "The parenthesis are unbalanced or test not run"}
      </div>
      <button
        onClick={() =>
          setTestResults(parenthesisTestFunction(checkParenthesisBalance))
        }
      >
        Run automated test on your balance algorithm
      </button>
      {testResults.length > 0 && TestVisualisation(testResults)}
    </div>
  );
};

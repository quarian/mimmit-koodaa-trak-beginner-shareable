import React, { useState } from "react";
import { findLongestSequence, detectPalindrome } from "./miscAlgorithms";
import {
  testLongestSequenceAlgorithm,
  testPalindromes
} from "./miscAlgorithmTests";

import "./MiscAlgorithmVisualisations.css";

export const MiscAlgorithmsPage = () => {
  return (
    <div className="MiscAlgorithmsContainer">
      <h1>
        Here are some miscellaneous algorithms for you to play with. Have fun!
      </h1>
      <LongestSequence />
      <Palindrome />
    </div>
  );
};

const LongestSequence = () => {
  const [testSequence, setTestSequence] = useState("");
  const [testSequenceResult, setTestSequenceResult] = useState(0);
  const [testResults, setTestresults] = useState(["Tests not run yet"]);
  return (
    <div className="MiscAlgorithm">
      <h2>Find the longest sequence of characters from a string.</h2>

      <label htmlFor="testSequence">Set test sequence for manual testing</label>
      <input
        type="text"
        id="testSequence"
        value={testSequence}
        onChange={e => setTestSequence(e.target.value)}
      />
      <button
        onClick={() => setTestSequenceResult(findLongestSequence(testSequence))}
      >
        Test your algorithm
      </button>
      <h3>{`Your algorithm found a sequence of length ${testSequenceResult}`}</h3>
      <button
        onClick={() =>
          setTestresults(testLongestSequenceAlgorithm(findLongestSequence))
        }
      >
        Run automated tests on your algorithm
      </button>
      <div>
        {testResults.map(result => (
          <h4>{result}</h4>
        ))}
      </div>
    </div>
  );
};

const Palindrome = () => {
  const [testString, setTestString] = useState("");
  const [testStringResult, setTestStringResult] = useState("");
  const [testResults, setTestresults] = useState(["Tests not run yet"]);
  return (
    <div className="MiscAlgorithm">
      <h2>Check if given string is a palindrome.</h2>

      <label htmlFor="testString">Set test string for manual testing</label>
      <input
        type="text"
        id="testString"
        value={testString}
        onChange={e => {
          setTestString(e.target.value);
          setTestStringResult("");
        }}
      />
      <button onClick={() => setTestStringResult(detectPalindrome(testString))}>
        Test your algorithm
      </button>
      <h3>
        {testStringResult !== ""
          ? `Your algorithm conclued that the string ${testString} ${
              testStringResult ? "is" : "is not"
            } a palindrome`
          : "No tests run"}
      </h3>
      <button onClick={() => setTestresults(testPalindromes(detectPalindrome))}>
        Run automated tests on your algorithm
      </button>
      <div>
        {testResults.map(result => (
          <h4>{result}</h4>
        ))}
      </div>
    </div>
  );
};

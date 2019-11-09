import React, { useState } from "react";
import { findMax, linearSearch } from "./simpleAlgorithms";
import {
  testFindMaxAlgorithm,
  testLinearSearchAlgorithm
} from "./simpleAlgorithmTests";

import "./SimpleAlgorithmVisualisations.css";
import { TestVisualisation } from "../TestFrameWork/TestVisualisation";

export const SimpleAlgorithmsPage = () => {
  return (
    <div className="SimpleAlgorithmsContainer">
      <h1>Here are some simple algorithms for you to play with. Have fun!</h1>
      <FindMax />
      <LinerSearch />
    </div>
  );
};

const FindMax = () => {
  const [testSequence, setTestSequence] = useState([]);
  const [testSequenceResult, setTestSequenceResult] = useState(0);
  const [testResults, setTestresults] = useState([]);
  return (
    <div className="SimpleAlgorithm">
      <h2>Find the maximum value from an array</h2>

      <label htmlFor="testSequence">
        Set test sequence for manual testing. The input will be interpreted as a
        number.
      </label>
      <input
        type="text"
        id="testSequence"
        value={testSequence}
        onChange={e => setTestSequence(e.target.value)}
      />
      <button onClick={() => setTestSequenceResult(findMax(testSequence))}>
        Test your algorithm
      </button>
      <h3>{`Your algorithm found a maxmimum value ${testSequenceResult}`}</h3>
      <button onClick={() => setTestresults(testFindMaxAlgorithm(findMax))}>
        Run automated tests on your algorithm
      </button>
      {testResults.length > 0 && TestVisualisation(testResults)}
    </div>
  );
};

const LinerSearch = () => {
  const [testSequence, setTestSequence] = useState([]);
  const [testTarget, setTestTarget] = useState("");
  const [testSequenceResult, setTestSequenceResult] = useState(0);
  const [testResults, setTestresults] = useState([]);
  return (
    <div className="SimpleAlgorithm">
      <h2>Find the desired item in an array.</h2>
      <div>
        <label htmlFor="testSequence">
          Set test sequence for manual testing. The input will be interpreted as
          an array.
        </label>
        <input
          type="text"
          id="testSequence"
          value={testSequence}
          onChange={e => setTestSequence(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="testTarget">Set element to search for.</label>
        <input
          type="text"
          id="testTarget"
          value={testTarget}
          onChange={e => setTestTarget(e.target.value)}
        />
      </div>
      <button
        onClick={() =>
          setTestSequenceResult(linearSearch(testSequence, testTarget))
        }
      >
        Test your algorithm
      </button>
      <h3>
        {testSequenceResult > -1
          ? `Your algorithm found the value in index ${testSequenceResult}`
          : "No match found"}
      </h3>
      <button
        onClick={() => setTestresults(testLinearSearchAlgorithm(linearSearch))}
      >
        Run automated tests on your algorithm
      </button>
      {testResults.length > 0 && TestVisualisation(testResults)}
    </div>
  );
};

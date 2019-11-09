import React, { useState } from "react";
import { generateRandomArray } from "./SortingUtils";
import { testSortingFunction, testSortingPerformance } from "./SortingTests";
import { TestVisualisation } from "../TestFrameWork/TestVisualisation";
import {
  bubbleSort,
  insertionSort,
  quickSort,
  selectionSort
} from "./sortFunctions";

import "./SortingVisualisation.css";

export const SortingPage = () => {
  return (
    <div>
      <h1>Sorting is a common problem faced in all kinds of applications</h1>
      <h2>Here are 4 sorting methods to implement.</h2>
      <p>
        Pay attention to the different performance of the implemented
        algorithms.<br></br>
        More info about time complexity:
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://yourbasic.org/algorithms/time-complexity-explained/"
            >
              YourBasic
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.hackerearth.com/practice/basic-programming/complexity-analysis/time-and-space-complexity/tutorial/"
            >
              HackerEarth
            </a>
          </li>
        </ul>
      </p>
      <SortingAlgorithmExample
        sortFunction={bubbleSort}
        title="Bubble sort algorithm"
        description="Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order."
        readMore="https://www.geeksforgeeks.org/bubble-sort/"
        /* https://medium.com/@viktor.stojanov90/naive-sort-algorithms-in-javascript-bubble-sort-6a44dd78042 */
      />
      <SortingAlgorithmExample
        sortFunction={selectionSort}
        title="Selection sort algorithm"
        description="Selection sort repeatedly selects the minimum value of the array to sort the arrya as a whole."
        readMore="https://www.geeksforgeeks.org/selection-sort/"
      />
      <SortingAlgorithmExample
        sortFunction={insertionSort}
        title="Insertion sort algorithm"
        description="Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands."
        readMore="https://www.geeksforgeeks.org/insertion-sort/"
        /* https://medium.com/basecs/inching-towards-insertion-sort-9799274430da */
      />
      <SortingAlgorithmExample
        sortFunction={quickSort}
        title="Quicksort algorithm"
        description="QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways."
        readMore="https://www.geeksforgeeks.org/quick-sort/"
        /* https://medium.com/basecs/pivoting-to-understand-quicksort-part-1-75178dfb9313 */
      />
    </div>
  );
};

const SortingAlgorithmExample = ({
  sortFunction,
  title,
  description,
  readMore
}) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10);
  const [arrayLength, setArrayLength] = useState(10);
  const [sortedArray, setSortedArray] = useState(
    generateRandomArray(10, 0, 10)
  );
  const [testResult, setTestResult] = useState(undefined);
  const [performanceTestResult, setPerfomanceTestResult] = useState(
    "No performance test run yet"
  );
  const setValue = (event, setFunction) => {
    const value = parseInt(event.target.value, 10);
    setFunction(value);
  };
  return (
    <div className="SortingExample">
      <h2>Explore {title} </h2>
      <p>
        {description}
        <br></br>(from:&nbsp;
        <a target="_blank" rel="noopener noreferrer" href={readMore}>
          GeeksForGeeks
        </a>
        )
      </p>
      <div>
        <label htmlFor="minValue">
          Set the minimum value in the sortable array
        </label>
        <input
          type="number"
          id="minValue"
          value={minValue}
          onChange={event => setValue(event, setMinValue)}
        />
      </div>
      <div>
        <label htmlFor="maxValue">
          Set the maximum value in the sortable array
        </label>
        <input
          type="number"
          id="maxValue"
          value={maxValue}
          onChange={event => setValue(event, setMaxValue)}
        />
      </div>
      <div>
        <label htmlFor="length">Set the length of sortable array</label>
        <input
          type="number"
          id="lentgh"
          value={arrayLength}
          onChange={event => setValue(event, setArrayLength)}
        />
      </div>
      <button
        onClick={() =>
          setSortedArray(generateRandomArray(arrayLength, minValue, maxValue))
        }
      >
        Generate new array for sorting
      </button>
      <div>
        <div>Currently, your array looks like this:</div>
        <div>
          {sortedArray.map((item, index) => (
            <span key={index}> {item} </span>
          ))}
        </div>
      </div>
      <button onClick={() => setSortedArray(sortFunction(sortedArray))}>
        Sort your array with {title}
      </button>
      <br></br> <br></br>
      <hr></hr>
      <div>
        <button
          onClick={() =>
            setTestResult(testSortingFunction(sortFunction, title))
          }
        >
          Run tests on {title}
        </button>
        <div>Test results:</div>
        <div>
          {testResult ? TestVisualisation([testResult]) : "No result yet"}
        </div>
      </div>
      <div>
        <h3>{`Run a performance test on your ${title} algorithm`}</h3>
        <button
          onClick={() =>
            setPerfomanceTestResult(testSortingPerformance(sortFunction, title))
          }
        >
          Test!
        </button>
        <div>{performanceTestResult}</div>
      </div>
    </div>
  );
};

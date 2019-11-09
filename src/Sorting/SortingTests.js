import { generateRandomArray } from "./SortingUtils";
import { testSorting } from "../TestFrameWork/testFunctions";

export const testSortingFunction = (sortingFunction, functionName) => {
  const arrayToSort = generateRandomArray(20, 0, 1000);
  const sortedArray = sortingFunction(arrayToSort);
  return testSorting(sortedArray, `Testing ${functionName}`);
};

export const testSortingPerformance = (sortingFunction, functionName) => {
  const arrayToSort = generateRandomArray(100000, 0, 100000);
  const t0 = performance.now();
  sortingFunction(arrayToSort);
  const t1 = performance.now();
  return `Sorting ${arrayToSort.length} items took ${t1 - t0} milliseconds`;
};

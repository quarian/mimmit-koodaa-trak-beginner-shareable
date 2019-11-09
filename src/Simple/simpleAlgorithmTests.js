import { testEquality } from "../TestFrameWork/testFunctions";

export const testFindMaxAlgorithm = findMaxAlgorithm => [
  testEquality(findMaxAlgorithm([1]), 1, "Test on one element array"),
  testEquality(findMaxAlgorithm([]), undefined, "Test on empty array"),
  testEquality(
    findMaxAlgorithm([1, 3, 4, 2]),
    4,
    "Test max value in the middle"
  ),
  testEquality(
    findMaxAlgorithm([10, 3, 4, 2]),
    10,
    "Test max value in the beginning"
  ),
  testEquality(
    findMaxAlgorithm([1, 3, 4, 3, 10]),
    10,
    "Test max value in the end"
  )
];

export const testLinearSearchAlgorithm = linearSearchAlgorithm => [
  testEquality(linearSearchAlgorithm([], 1), -1, "Search from an empty array"),
  testEquality(
    linearSearchAlgorithm([1, 2, 4], 1),
    0,
    "Target in the beginning"
  ),
  testEquality(linearSearchAlgorithm([1, 2, 4], 4), 2, "Target in the end"),
  testEquality(linearSearchAlgorithm([1, 2, 4], 2), 1, "Target in the middle")
];

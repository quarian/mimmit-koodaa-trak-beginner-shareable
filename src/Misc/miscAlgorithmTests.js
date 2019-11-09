export const testLongestSequenceAlgorithm = longestSequenceFunction => [
  testLongestSequenceAtEnd(longestSequenceFunction),
  testLongestSequenceAtBeginning(longestSequenceFunction),
  testLongestSequenceInMiddle(longestSequenceFunction)
];

const testLongestSequenceAtEnd = longestSequenceFunction => {
  const array = "aabcccdeeeeeee";
  const longestSequence = longestSequenceFunction(array);
  return longestSequence === 7
    ? `Successful test run on ${array}`
    : `Test failed on ${array}`;
};

const testLongestSequenceAtBeginning = longestSequenceFunction => {
  const array = "vvvvvvvaabcccdeeeee";
  const longestSequence = longestSequenceFunction(array);
  return longestSequence === 7
    ? `Successful test run on ${array}`
    : `Test failed on ${array}`;
};

const testLongestSequenceInMiddle = longestSequenceFunction => {
  const array = "aabccvvvvvvvcdeeeee";
  const longestSequence = longestSequenceFunction(array);
  return longestSequence === 7
    ? `Successful test run on ${array}`
    : `Test failed on ${array}`;
};

export const testPalindromes = palindromeFunction => [
  tesOddLengthPalindrome(palindromeFunction),
  tesEvenLengthPalindrome(palindromeFunction),
  testNonPalindrome(palindromeFunction)
];

const tesOddLengthPalindrome = palindromeFunction => {
  const palindrome = "saippuakivikauppias";
  const isPalindrome = palindromeFunction(palindrome);
  return isPalindrome
    ? `Successful test run on ${palindrome}`
    : `Test failed on ${palindrome}`;
};

const tesEvenLengthPalindrome = palindromeFunction => {
  const palindrome = "okko";
  const isPalindrome = palindromeFunction(palindrome);
  return isPalindrome
    ? `Successful test run on ${palindrome}`
    : `Test failed on ${palindrome}`;
};

const testNonPalindrome = palindromeFunction => {
  const palindrome = "jkhsakjhdksajd";
  const isPalindrome = palindromeFunction(palindrome);
  return !isPalindrome
    ? `Successful test run on ${palindrome}`
    : `Test failed on ${palindrome}`;
};

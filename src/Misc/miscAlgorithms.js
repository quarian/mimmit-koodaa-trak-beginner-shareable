export const findLongestSequence = arrayLike => {
  let currentSequence = 0;
  let longetsSequence = 0;
  let currentElement = "";
  let previousElement = "";
  for (let i = 0; i < arrayLike.length; i++) {
    currentElement = arrayLike[i];
    if (previousElement === "" || currentElement === previousElement) {
      currentSequence += 1;
    } else if (currentElement !== previousElement) {
      if (currentSequence > longetsSequence) {
        longetsSequence = currentSequence;
      }
      currentSequence = 1;
    }
    previousElement = currentElement;
  }
  return longetsSequence > currentSequence ? longetsSequence : currentSequence;
};

export const detectPalindrome = palindromeCandidate => {
  let i = 0;
  let j = palindromeCandidate.length - 1;
  for (i; i < palindromeCandidate.length / 2; i++) {
    if (palindromeCandidate[i] !== palindromeCandidate[j]) {
      return false;
    }
    j--;
  }
  return true;
};

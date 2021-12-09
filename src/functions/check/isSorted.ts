const defaultComparator = (a: number, b: number) => {
  return a - b;
};

/**
 * Function to check if the array given is sorted or not
 *
 * @param input input array
 * @param comparator comparator function
 * @returns {boolean}
 */
const isSortedArray = (input: any, comparator = defaultComparator) => {
  if (!Array.isArray(input))
    throw new TypeError(`Expected Array, got ` + typeof input);

  for (var index = 1, length = input.length; index < length; ++index)
    if (comparator(input[index - 1], input[index]) > 0) return false;

  return true;
};

export default isSortedArray;

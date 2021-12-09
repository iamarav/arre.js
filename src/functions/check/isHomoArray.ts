type shouldBeTypeInput = "string" | "number" | "boolean" | null;

/**
 * Function to check if the array has elements of same type
 *
 * @param inputArray input array
 * @param shouldBeType
 * @returns {boolean}
 */
const isHomoArray = (
  inputArray: any[],
  shouldBeType: shouldBeTypeInput = null
) => {
  if (!Array.isArray(inputArray))
    throw new TypeError(`Expected Array, got ` + typeof inputArray);

  if (inputArray.length < 1) return true;

  const typeOfFirstElement = typeof inputArray[0];

  if (!!shouldBeType && typeOfFirstElement !== shouldBeType) return false;

  return inputArray.every((val) => typeof val === typeOfFirstElement);
};

export default isHomoArray;

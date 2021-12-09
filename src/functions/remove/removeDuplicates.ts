/**
 * Removes the duplicates from an array
 *
 * @param input array of strings or numbers
 * @returns array
 */
const removeDuplicates = (input: any[]) => {
  if (!Array.isArray(input))
    throw new TypeError(`Expected Array, got ` + typeof input);

  return Array.from(new Set(input));
};

export default removeDuplicates;

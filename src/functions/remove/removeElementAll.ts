/**
 * Removes all occurrences of the element from the array
 *
 * @param input input array containing the elements
 * @param element element to be removed from the array
 * @returns array
 */
export default function removeElementAll(
  input: any[],
  element: number | string | boolean
) {
  if (!Array.isArray(input))
    throw new TypeError(`Expected Array, got ` + typeof input);

  const searchIndex = input.indexOf(element);
  if (searchIndex < 0) return input;

  return input.filter((e) => e !== element);
}

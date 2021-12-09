/**
 * Removes first element from the array
 * @param input input array
 * @returns {any[]} array
 */
export default function removeFirst(input: any[]) {
  if (!Array.isArray(input)) {
    throw new TypeError(`Expected Array, got ` + typeof input);
  }
  if (input.length < 1) {
    return [];
  }
  return input.slice(1, input.length - 1);
}

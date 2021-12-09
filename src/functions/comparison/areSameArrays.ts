/**
 * Checks if the arrays in the parameters are same/identical.
 *
 * @param a array 1
 * @param b array 2
 * @returns {boolean}
 */
export default function areSameArrays(a: any[], b: any[]): boolean {
  if (!Array.isArray(a))
    throw new TypeError(`Expected first param to be an array, got ` + typeof a);

  if (!Array.isArray(b))
    throw new TypeError(
      `Expected second param to be an array, got ` + typeof b
    );

  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

import isHomoArray from "../check/isHomoArray";

/**
 * Adds all the values in the array
 *
 * @param args input array of values
 * @returns array
 */
export function addValues(...args: number[] | any): number {
  if (!Array.isArray(args)) throw new TypeError("Args must be an array");
  if (args.length < 1) return 0;

  const [first] = args;

  if (
    (typeof first !== "number" && !Array.isArray(first)) ||
    !isHomoArray(args)
  ) {
    throw new TypeError(`Expected Number Array or Array of Number Array`);
  }

  return args.reduce((total, current) => (total += current));
}

export default { addValues };

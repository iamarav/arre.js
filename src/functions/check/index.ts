import isArrayFn from "./isArray";
import isHomoArrayFn from "./isHomoArray";
import isSortedFn from "./isSorted";

export const isArray = isArrayFn;
export const isHomoArray = isHomoArrayFn;
export const isSortedArray = isSortedFn;

export default {
  isArray: (arr: any[]) => isArrayFn(arr),
  isHomoArray: (arr: any[]) => isHomoArrayFn(arr),
  isSortedArray: (arr: any[]) => isSortedFn(arr),
};

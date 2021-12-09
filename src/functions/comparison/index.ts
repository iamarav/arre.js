import areSameArraysFn from "./areSameArrays";

export const areSameArrays = areSameArraysFn;

export default {
  areSameArrays: (arr1: any[], arr2: any[]) => areSameArraysFn(arr1, arr2),
};

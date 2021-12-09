import checkFunctions from "./functions/check";
import comparisonFunctions from "./functions/comparison";
import mathFunctions from "./functions/math";
import { removeDuplicates as removeDuplicatesFn } from "./functions/remove";

const Arre = function (...args: any) {
  return {
    removeDuplicates: () => removeDuplicatesFn(args),
  };
};

(function () {
  Object.assign(Arre, checkFunctions);
  Object.assign(Arre, comparisonFunctions);
  Object.assign(Arre, mathFunctions);
})();

export default Arre;

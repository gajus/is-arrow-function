import isFunction from './isFunction';

let isRegularFunction,
    functionToString;

functionToString = Function.prototype.toString;

isRegularFunction = (fn: Object): boolean => {
    return functionToString.call(fn).indexOf('function') === 0;
};

export default (fn: Object): boolean => {
    return isFunction(fn) && !isRegularFunction(fn);
};




import isFunction from './isFunction';

let isRegularFunction;

isRegularFunction = (fn: Object): boolean => {
    return fn.toString().indexOf('function') === 0;
};

export default (fn: Object): boolean => {
    return isFunction(fn) && !isRegularFunction(fn);
};




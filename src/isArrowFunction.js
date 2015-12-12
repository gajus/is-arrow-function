import isFunction from './isFunction';

export default (fn: Object): boolean => {
    return isFunction(fn) && fn.toString().indexOf('function') !== 0;
};

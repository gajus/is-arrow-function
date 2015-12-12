export default (fn: Object): boolean => {
    return fn.toString().indexOf('function') !== 0;
};

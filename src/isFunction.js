export default (fn: Object): boolean => {
    return fn && ({}).toString.call(fn) === '[object Function]';
};

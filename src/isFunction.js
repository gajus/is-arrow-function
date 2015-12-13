import isCallable from 'is-callable';

export default (fn: Object): boolean => {
    return Boolean(fn && isCallable(fn) && ({}).toString.call(fn) === '[object Function]');
};

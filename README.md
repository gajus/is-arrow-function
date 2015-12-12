# `is-arrow-function`

Checks if value is an [arrow function](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions) object.

This function is used to distinguish an arrow function from a [regular function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions).

See http://stackoverflow.com/q/34244183/368691 for a discussion regarding the best method to determine if value is an arrow function.

## Use

```js
import isArrowFunction from 'is-arrow-function';

isArrowFunction(() => {});
// true

isArrowFunction(function () {});
// false
```

## Install

```sh
npm install is-arrow-function
```

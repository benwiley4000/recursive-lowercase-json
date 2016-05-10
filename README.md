#recursive-lowercase-json

This module provides a function that accepts one argument, a JSON-compatible JavaScript object. It returns a deep copy of that object with all object keys transformed to lowercase-only (including objects nested inside of arrays).

Any object will work, but if it contains JSON-incompatible properties (e.g. functions), they will be ignored (or interpreted as empty objects). The module's intended use is for JSON responses from APIs, which may contain object keys with a capitalized format -- perhaps not in line with your application's conventions.

Installation (get it from [npm](https://www.npmjs.com/package/recursive-lowercase-json)):
```
npm install recursive-lowercase-json
```

Usage:
```
/**
 * ES6/ES2015 syntax
 */
import recursivelyLowercaseJSONKeys from 'recursive-lowercase-json';

const data = {
  Data1: {
    FieldA: 1,
    FieldB: false
  },
  Data2: [
    {
      FieldC: "hello"
    }
  ]
};

const lowercaseData = recursivelyLowercaseJSONKeys(data);

console.log(lowercaseData);
/**
 * prints:
 * { data1: { fielda: 1, fieldb: false },
 *   data2: [ { fieldc: 'hello' } ] }
 *
 */
```


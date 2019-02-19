[![npm version](https://badge.fury.io/js/%40rmoral%2Frm-js.svg)](https://badge.fury.io/js/%40rmoral%2Frm-js)

# rm-js

> Set of useful js utilities

- [Functions](#functions)
  - [Pipe](#pipe)
- [Strings](#strings)
  - [Object to query string](#object-to-query-string)
  - [Query string to object](#query-string-to-object)
- [Validation Methods](#validation-methods)
- [regex](#regex)

---

# Docs

> Install using [`npm`](https://www.npmjs.com/)

```sh
$ npm install @rmoral/rm-js --save
```

## Functions

### asyncPipe

> Consist of a chain of processing async and sync functions, where the output of each element is the input of next. The result is a promise.

```js
import {asyncPipe} from @rmoral/rm-js/lib/functions

const add1 = async x => x + 1;

asyncPipe(add1, add1, add1)(1).then(result => {
  console.log(result) // 4
})
```

### pipe

> Consist of a chain of processing functions, where the output of each element is the input of next

```js
import {pipe} from @rmoral/rm-js/lib/functions

const add1 = x => x + 1;

pipe(
    add1,
    add1
)(0)
```

## Strings

### Object to query string

> Convert object to query string. `addQueryPrefix` is true by default (`?` at the beginning)

```js
import {toQueryString} from @rmoral/rm-js/lib/string

const addQueryPrefix = true

toQueryString({
    name: 'John',
    age: 30
}, addQueryPrefix)
```

### Query string to object

> Convert query string to object

```js
import {parseQueryString} from @rmoral/rm-js/lib/string

parseQueryString('?name=John&age=30')
```

## Validation Methods

Some validation methods:

- isValidBankAccount
- isValidEmail

```js
import {validationMethod} from @rmoral/rm-js/lib/validation
```

## regex

Some useful regex:

- DATE_ISO_8601
- EMAIL_REGEX
- HEX_COLOR
- TIME_24H
- URL

```js
import {EMAIL_REGEX} from @rmoral/rm-js/lib/regex
```

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
> Convert plain object to query string

```js
import {toQueryString} from @rmoral/rm-js/lib/string

const addQueryPrefix = true

toQueryString({
    name: 'John',
    age: 30
}, addQueryPrefix)
```

### Query string to object
> Convert plain object to query string

```js
import {parseQueryString} from @rmoral/rm-js/lib/string

parseQueryString('?name=John&age=30')
```

## Validation Methods
Some validation methods:

* isValidBankAccount
* isValidEmail

```js
import {validationMethod} from @rmoral/rm-js/lib/validation
```

## regex
Some useful regex:

* EMAIL_REGEX

```js
import {EMAIL_REGEX} from @rmoral/rm-js/lib/regex
```

# rm-js
> Set of useful js utilities

- [Functions](#functions)
    - [pipe](#pipe)
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
Consist of a chain of processing functions, where the output of each element is the input of next

```js
import {pipe} from @rmoral/rm-js/lib/functions

const add1 = x => x + 1;

pipe(
    add1,
    add1
)(0)
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

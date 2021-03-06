# Assert

A simple Javascript library which contains assertions and guard methods for input validation, heavily inspired by [beberlei/assert](https://github.com/beberlei/assert) for PHP.

## Installation

```bash
npm install @lynchbox/assert;
```

## List of assertions

```node
import assert from @lynchbox/assert;

assert(value: number).between(lowerlimit: number, upperLimit: number);
assert(value: string).contains(needle: string);
assert(value: string).eq(value2: string);
assert(value: number).moreThanOrEqualTo(limit: number);
assert(value: number).lessThanOrEqualTo(limit: number);
assert(value: any).isIn(source: Array<any>);
assert(value: string).endsWith(needle: string);
assert(value: string).startsWith(needle: string);
assert(value: Array<any>).uniqueValues();
assert(value: number).moreThan(limit: number);
assert(value: number).lessThan(limit: number);

```

## Running Tests
Tests are written using Jest.

```bash
npm run test
```

### Code Coverage

```bash
npm run coverage
```

## Compile Typescript

```bash
npm run build
```

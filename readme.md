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
assert(value: string).contains('surely');
assert(value: string).eq('same');
assert(value: number).greaterOrEqualThan(limit: number);
assert(value: any).isIn(source: Array);
assert(value: string).endsWith(needle: string);
assert(value: string).startsWith(needle: string);

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

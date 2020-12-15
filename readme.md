# Assert

A simple Javascript library which contains assertions and guard methods for input validation, heavily inspired by [beberlei/assert](https://github.com/beberlei/assert) for PHP.

## Installation

```bash
npm install @lynchbox/assert;
```

## List of assertions

```node
import assert from @lynchbox/assert;

assert.between(5, 1, 10);
assert.contains(`I am serious…and don't call me Shirley`, 'surely');
assert.eq('same', 'same');
assert.greaterOrEqualThan(value: number, limit: number);

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

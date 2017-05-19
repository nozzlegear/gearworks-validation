# gearworks-validation
A TypeScript wrapper around the Joi package, providing typed object validation for Gearworks apps. [Gearworks](https://github.com/nozzlegear/gearworks) is the best way to get started with building Shopify applications!

## Installing

You can install this package from NPM with the NPM CLI or with Yarn (recommended):

```bash
# With NPM
npm install gearworks-validation --save

# With Yarn
yarn add gearworks-validation
```

## Importing

You can import the validators either one function at a time, or all at once, via require or TypeScript's import:

```typescript
// Import all functions
import * as gwv from "gearworks-validation";

// Import just one function
import { strings } from "gearworks-validation";

// Import all functions via Node's require:
const gwv = require("gearworks-validation");

// Import just one function via Node's require:
const strings = require("gearworks-validation").strings;
```

## Usage

Most of the functions are straightforward and self-explanatory. Where this package really shines is when using the functions that provide intellisense for TypeScript types: `object`, `numbers`, `onlyStrings`, `onlyStringsOrEmpty`, and `array`.

```typescript
import * as gwv from "gearworks-validation";

type MyString = "hello" | "world";

type MyNumber = 1 | 2 | 3;

interface MyType {
    foo: string;
    bar: number;
    baz: boolean;
    bat: MyString[];
    bang: MyNumber[];
}

const schema = gwv.object<MyType>({
    // We now have intellisense on MyType property names.
    foo: gwv.string().required(),
    bar: gwv.number(),
    baz: gwv.boolean(),
    bat: gwv.onlyStrings<MyString>("hello", "world" /* And we have intellisense on these strings. */),
    bang: gwv.numbers<MyNumber>(1, 2, 3 /* And these numbers! */)
})
```

## Why?

[Joi](https://npmjs.com/package/joi) is a great package, which I use liberally throughout Gearworks and my own custom Shopify apps, but it has one big pitfall that we can easily fall into when working with plain JS packages: there's no type intellisense for the objects that I'm validating!

I would have zero intellisense for validating an object with plain Joi; I'd have to open my interface definition in a side-by-side window to make sure I was validating all of the properties I needed to validate. *Worse*, though, was that I wouldn't have any warnings or compiler errors when I changed a property on my interfaces. I'd just have to cross my fingers and hope that I updated all occurrences.

That problem is now solved with `gearworks-validation`.
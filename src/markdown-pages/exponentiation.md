---
path: "/blog/exponentiation"
date: "2019-05-04"
title: "How to do Exponentiation in JavaScript"
tags: ["number"]
---

There are multiple to compute exponents with JavaScript.
The newest way is the exponentiation operator `**`, available with ES2016 or higher.
For example, we can do this:

```
const a = 2 ** 3; // 8
```

It is right associative, so `a ** b ** c` is equal to `a ** (b ** c)`. This works with all exponents.
For example:

```
const a = 2 ** (3 ** 4);
const b = 2 ** 3 ** 4;
a == b // true, both are 2.4178516392292583e+24
```

Detail browser compatibility is available at [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Browser_compatibility](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Browser_compatibility)
We can also use the `Math.pow` function, like this:

```
const a = Math.pow(2,3) // 8
```

It takes 2 arguments, the first is the base and the second is the exponent. `Math.pow` works with all exponents.
`Math.pow` is compatible with all recent browsers.
![](https://cdn-images-1.medium.com/max/800/1*3X6EiKc-njoRpCB1AWnv3Q.png)

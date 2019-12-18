---
path: "/blog/concat-array"
date: "2019-05-04"
title: "How to Concatenate Array in JavaScript"
tags: ["array"]
---

There are a few ways to concatenate arrays in JavaScript.

## Array.concat

We can all `Array.concat` on an array to combine 2 arrays and return the new one. For example:

```
const a = [1,2,3];
const b = [4,5];
const c = a.concat(b) // [1,2,3,4,5]
```

## Array.push

We can push elements of one array into another.

```
const a = [1,2,3];
const b = [4,5];
let c = Object.assign([], a);
for (let i = 0; i < b.length; i++){
  c.push(b[i]);
}
console.log(c); // [1,2,3,4,5]
```

What we did is make a copy of `a` and assigned it to `c` , then pushed the elements of `b` by looping through it and adding them to the end of `c` .

## Spread Operator

With ES6 or later, we can use the spread operator to spread the items from another array into a new array by doing the following:

```
const a = [1,2,3];
const b = [4,5];
const c = [...a, ...b];
console.log(c); // [1,2,3,4,5]
```

![](https://cdn-images-1.medium.com/max/800/1*3X6EiKc-njoRpCB1AWnv3Q.png)

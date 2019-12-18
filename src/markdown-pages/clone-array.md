---
path: "/blog/clone-array"
date: "2019-05-04"
title: "How to Clone Array in JavaScript"
tags: ["array"]
---

There are a few ways to clone an array in JavaScript,

### Object.assign

`Object.assign` allows us to make a shallow copy of any kind of object including arrays.
For example:

<pre>const a = [1,2,3];
const b = Object.assign([], a); // [1,2,3]</pre>

### Array.slice

The `Array.slice` function returns a copy of the original array.
For example:

<pre>const a = [1,2,3];
const b = a.slice(0); // [1,2,3]</pre>

### Array.from

The `Array.slice` function returns a copy of the original array. It takes array like objects like `Set` and it also takes an array as an argument.

<pre>const a = [1,2,3];
const b = Array.from(a); // [1,2,3]</pre>

### Spread Operator

The fastest way to copy an array, which is available with ES6 or later, is the spread operator.

<pre>const a = [1,2,3];
const b = [...a]; // [1,2,3]</pre>

### JSON.parse and JSON.stringify

This allows for deep copy of an array and only works if the objects in the array are plain objects. It can be used like this:

<pre>const a = [1,2,3];
const b = JSON.parse(JSON.stringify(a)); // [1,2,3]</pre>

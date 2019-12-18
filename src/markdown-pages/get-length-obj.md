---
path: "/blog/get-length-obj"
date: "2019-05-04"
title: "How to Get the Length of An Object"
tags: ["object"]
---

There are 2 ways to get the length of the list of keys of an object.

## Object.keys

`Object.keys` gets the top level list of keys of an object and returns an array of them. For example:

```
const a = {foo: 1, bar: 2};
const length = Object.keys(a).length // 2
```

## Object.getPropertyNames

`Object.getPropertyNames` also gets a list of all top level of keys of an object and return them as an array. For example:

```
const a = {foo: 1, bar: 2};
const length = Object.`getOwnPropertyNames`(a).length // 2
```

## for…in Loop

There is a special loop for looping through the keys of an object. You can do the following:

```
const a = {foo: 1, bar: 2};
let keysCount = 0;
for (let key in a) {
    keysCount++;
}
console.log(`keysCount) // 2
```

![](https://cdn-images-1.medium.com/max/800/1*3X6EiKc-njoRpCB1AWnv3Q.png)

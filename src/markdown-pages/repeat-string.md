---
path: "/blog/repeat-strings"
date: "2019-05-04"
title: "How to Repeat Strings with JavaScript"
tags: ["string"]
---

There are a few ways to repeat a string in JavaScript. JavaScript strings have a built in `repeat()` function. You can also use a loop to do the same thing.

## String.repeat Function

To use the `repeat` function, you pass in the number of times you want to repeat the string as an argument. It returns a new string
For example:

```
const hello = "hello";
const hello5 = A.repeat(5);
console.log(hello5); // "hellohellohellohellohello"
```

## Use a loop

You can use `for` loop and `while` loop to do repeatedly concatenate strings.
Using a `for` loop, you can do:

```
const hello = "hello";
```

With a `while` loop, you can do:

```
const hello = "hello";
```

They both involve increment indexes up to the maximum.
![](https://cdn-images-1.medium.com/max/800/1*3X6EiKc-njoRpCB1AWnv3Q.png)

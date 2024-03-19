# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?


- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?

- What is the `?:` (ternary) operator? How does it differ from `if/else`?

- What is the `?.` (optional chaining) operator? When would you use it?

- What is `...` (spread) syntax? How do you use it with arrays and objects?

- What data types can be spread into an array? Into an object?

- How does spread syntax differ from rest syntax?

  the && works left to right and compares if both things are true while the || operator looks for a truthy value or false
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  returns right hand side if left side is falsey
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  returns its right-hand side operand when its left-hand side operand is null or undefined , and otherwise returns its left-hand side operand
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  it can help return a value unlike if and else statements
- What is the `?.` (optional chaining) operator? When would you use it?
  If something is undefined it will return undefined. We would use it to get data from an API
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  takes one element and spreads it into multiple elements. Object takes key value pair and spreads them out
- What data types can be spread into an array? Into an object?
  In an array we can put any data
- How does spread syntax differ from rest syntax?
  Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.


## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```

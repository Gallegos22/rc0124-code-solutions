# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  they enable asynchronous, promise-based behavior to be written in a cleaner style and avoiding the need to explicitly configure promise chains.
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  Async/await provides a more procedural syntax that makes asynchronous code look similar to synchronous code, with better error handling capabilities
- When do you use `async`?
  by typing async before your function
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  you use await inside the inside a try and only with a async function. Anything else will give you an error
- How do you handle errors with `await`?
  By wrapping your code in a try / catch block.
- What do `try`, `catch` and `throw` do? When do you use them?
  The try statement defines a code block to run (to try).The catch statement defines a code block to handle any error.The throw statement defines a custom error.
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  the promise will never get fulfillment and never be executed. The code will throw an error
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  I am more familiar with callbacks however I want to be able to use async/await over promise.then since it looks more efficient and less time consuming

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
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

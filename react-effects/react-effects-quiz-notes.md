# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
after it has been triggered and rendered
- What is a React Effect?
side affect of whatever is going on in the rendering
- When should you use an Effect and when should you not use an Effect?
use it to interact with an outside data source or outside system
- When do Effects run?
after a function is rendered.
- What function is used to declare an Effect?
useEffect hook
- What are Effect dependencies and how do you declare them?
variables that allow change, and to declare add them to dependency array
- Why would you want to clean up from an Effect?
to reduce memory leaks
- How do you clean up from an Effect?
by returning a function
- When does the cleanup function run?
before the each time it runs and a final time before it runs
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

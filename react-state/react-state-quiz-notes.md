# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  useState, as well as any other function starting with “use”, is called a Hook.
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  Hooks can only be called inside React function components. Hooks can only be called at the top level of a component. Hooks cannot be conditional.
- What is the purpose of state in React?
  to contain data or information about the component
- Why can't we just maintain state in a local variable?
  Local variables don’t persist between renders. and Changes to local variables won’t trigger renders.
- What two actions happen when you call a `state setter` function?
  import useState from React at the top of the file and add a state variable with the setter function
- When does the local `state variable` get updated with the new value?
  when it re-renders

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

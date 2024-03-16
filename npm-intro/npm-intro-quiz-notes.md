# npm-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is NPM?
  worlds largest software registry that has :
  the website
  the Command Line Interface (CLI)
  the registry
- What is a package?
  a file or directory that is described by a package. json file.
- What are some other popular package managers?
  NPM, YARN, and PNPM.
- How can you create a `package.json` with `npm`?
  npm init.
- What is a dependency and how do you add one to a package?
  Packages required by your application in production. You can add dependencies to a package.json file from the command line or by manually editing the package.json file. --save-prod. --save-dev
- What happens when you add a dependency to a package with `npm`?
  the devDependencies will get stored in the package. json file
- What is a devDependency and how do you add one to a package?
  Packages that are only needed for local development and testing. using the --save-prod flag for dependencies or the --save-dev flag for devDependencies.
- How do you define and run `npm` scripts? Why are these useful?
  To define , set its name and write the script under the 'scripts' property of your package. json file: To execute your Script, use the 'npm run <NAME-OF-YOUR-SCRIPT>' command. They provide a simple way to execute repetitive tasks, like: Running a linter tool on your code.

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

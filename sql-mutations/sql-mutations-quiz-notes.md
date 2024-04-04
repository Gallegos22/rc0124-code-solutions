# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?
  create is insert, read is select , update is update , delete is delete
- How do you add a row to a SQL table?
  insert
- How do you add multiple rows to a SQL table at once?
  with commas
- How do you update rows in a database table?
  using update
- How do you delete rows from a database table?
  using delete
- Why is it important to include a `where` clause in your `update` and `delete` statements?
  so you can be more specific and not delete something else by accident
- How do you accidentally delete or update all rows in a table?
  by not being specific and adding a where clause
- How do you get back the modified row without a separate `select` statement?
  by using returning
- Why did you get an error when trying to delete certain films?
  because it being referenced inside the "cast members data table." In films filmId is a primarykey while in castmember, filmId is a foreign key because it is being referenced in films

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

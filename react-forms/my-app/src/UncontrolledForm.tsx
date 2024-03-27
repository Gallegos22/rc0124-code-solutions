import type { FormEvent } from 'react';

export function UncontrolledForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const currentTarget = Object.fromEntries(formData);

    console.log('currentTarget:', currentTarget);
  };
  // name creates a property that stores the values data on the form data object, specifically on elements property
  return (
    <form onSubmit={handleSubmit}>
      <label>
        User Name
        <input type="text" name="username" autoComplete="username" />
      </label>
      <label>
        Password
        <input type="password" name="password" autoComplete="password" />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}

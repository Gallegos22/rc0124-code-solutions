import { useState } from 'react';
import type { ChangeEvent } from 'react';

export function ControlledForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUserChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event?.target.value);
  };

  const handlePassChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    event?.preventDefault();
    console.log({ username, password });
  };
  //
  return (
    <form>
      <label>
        User Name
        <input
          type="text"
          value={username}
          onChange={handleUserChange}
          autoComplete="username"
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={handlePassChange}
          autoComplete="password"
        />
      </label>
      <button type="submit" onClick={handleSubmit}>
        Sign Up
      </button>
    </form>
  );
}

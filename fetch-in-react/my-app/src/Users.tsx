/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import { UserDetails } from './UserDetails';
import { UserCard } from './UserCard';
import './Users.css';

export type User = {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
};
export function Users() {
  const [isLoading, setIsLoading] = useState(true); // this will determine whether or not we want to se "is loading" on our page
  const [error, setError] = useState<unknown>();
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    // calling a useEffect function to tell React that the component needs to do something after render
    async function work() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users' // waiting for the data to come back from the link
        );
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        const userItems = await response.json();
        console.log('userItems:', userItems);
        setUsers(userItems);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false); // removing the isLoading from the page
    }
    work();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return (
      <p>Error! {error instanceof Error ? error.message : 'Unknown Error'}</p>
    );
  }
  return (
    <div className="container">
      <UserList users={users} onClick={(user) => setUser(user)} />
      {user && (
        <UserDetails userId={user.id} onCancel={() => setUser(undefined)} />
      )}
    </div>
  );
}

type ListProps = {
  users: User[];
  onClick: (user: User) => void;
};
function UserList({ users, onClick }: ListProps) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <UserCard user={user} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
}

import { useState, useEffect } from 'react';
import './App.css'

export default function App() {
  const [user, setUser] = useState(null)
  const [id, setId] = useState()

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((res) => setUser(res));
  }, [id]);

  const SearchById = (e) => {
    if (!isNaN(e.target.value)) {
      setId(e.target.value);
    }
    else
      alert("ID input must be numeric");
  }

  return (
    <div>
      <h2>Search User:</h2>
      <input value={id} onChange={SearchById} placeholder="Search by ID" />
      <div>
        <p><b>Name:</b> {user?.name}</p>
        <p><b>Username:</b> {user?.username}</p>
        <p><b>Phone:</b> {user?.phone}</p>
      </div>
    </div>
  );
}
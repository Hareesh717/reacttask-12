import React from "react";
import useFetchData from "./useFetchData";
import "./App.css";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const { data: users, loading, error } = useFetchData(API_URL);

  if (loading) {
    return (
      <div className="status-container">
        <p className="loading">Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-container">
        <p className="error">{error}</p>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="header">
        <h1>User Directory</h1>
        <p>Users fetched using a reusable custom Axios hook</p>
      </header>

      <main className="user-grid">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <div className="user-header">
              <div className="avatar">
                {user.name.charAt(0)}
              </div>

              <div>
                <h2>{user.name}</h2>
                <p>@{user.username}</p>
              </div>
            </div>

            <div className="user-details">
              <p>
                <strong>ID:</strong> {user.id}
              </p>

              <p>
                <strong>Name:</strong> {user.name}
              </p>

              <p>
                <strong>Username:</strong> {user.username}
              </p>

              <p>
                <strong>Email:</strong> {user.email}
              </p>

              <p>
                <strong>Phone:</strong> {user.phone}
              </p>

              <p>
                <strong>Website:</strong> {user.website}
              </p>

              <p>
                <strong>City:</strong> {user.address.city}
              </p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default App;
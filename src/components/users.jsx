import User from "./user";
import { useState } from "react";

const Users = ({ users }) => {
  const [loading, setLoading] = useState(true);

  function showUsers() {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }
  return (
    <>
      {loading ? (
        <div className="loader flex justify-center items-center">
          {showUsers()} Loading...
        </div>
      ) : (
        <section className="users" id="users">
          <h1 className="section-heading">Users</h1>
          <div className="container">
            {users.map((user) => {
              return <User key={user.id} user={user} />;
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default Users;

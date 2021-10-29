import User from "./user";
import { connect } from "react-redux";
import { useState } from "react";

const Users = ({ userData }) => {
  const [loading, setloading] = useState(true);

  function loader() {
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }

  return loading ? (
    <div className="loader flex justify-center items-center">
      {loader()} Loading...
    </div>
  ) : userData.errors ? (
    <h2>{userData.errors}</h2>
  ) : (
    <section className="users" id="users">
      <h1 className="section-heading">Users</h1>
      <div className="container">
        {userData &&
          userData.users &&
          userData.users.map((user) => {
            return <User key={user.id} user={user} />;
          })}
      </div>
    </section>
  );
};

function mapStateToProps(state) {
  return {
    userData: state,
  };
}

export default connect(mapStateToProps, null)(Users);

import React from "react";

const User = ({ user }) => {
  const { avatar, first_name, last_name, email } = user;
  return (
    <div className="card flex flex-col">
      <div className="avatar flex items-center justify-center">
        <img src={avatar} alt="Avatar" />
      </div>
      <h2 className="name">
        {first_name} {last_name}
      </h2>
      <a href={`mailto:${email}`} className="email">
        {email}
      </a>
      <a href={`mailto:${email}`} className="btn btn-secondary">
        Contact Me
      </a>
    </div>
  );
};

export default User;

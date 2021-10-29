import Navbar from "./components/navbar";
import Users from "./components/users";
import "./assets/styles/main.scss";
import React from "react";
import { connect } from "react-redux";

const App = ({ userData }) => {
  return (
    <>
      <Navbar />
      {userData.loading ? (
        <div className="loader flex justify-center items-center wrap">
          Click Get Users Button to fetch Users
        </div>
      ) : (
        <Users />
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    userData: state,
  };
}

export default connect(mapStateToProps, null)(App);

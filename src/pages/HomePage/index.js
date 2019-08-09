// Core
import React from "react";
// Instruments
import Styles from "./styles.m.css";
import UserList from "../../components/UserList";



const HomePage = () => {
  return (
    <div className={Styles.content}>
      <UserList />
    </div>
  );
};

export default HomePage;

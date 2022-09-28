import React from 'react';
import {FC} from "react";
import {Link} from "react-router-dom";

const Navbar:FC = () => {
  return (
    <div className="navbar">
        <div>Test page</div>
      <li><Link to="/users">Users</Link></li>
      <li><Link to="/todos">Todos</Link></li>
    </div>
  );
};

export default Navbar;
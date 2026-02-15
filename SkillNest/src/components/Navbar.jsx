import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">SkillNest</h1>

      <div className="space-x-6">
        <Link className="hover:text-blue-400" to="/">Home</Link>
        <Link className="hover:text-blue-400" to="/courses">Courses</Link>
        <Link className="hover:text-blue-400" to="/auth">Login</Link>
         <Link className="hover:text-blue-400" to="/admin">Admin</Link>
        <Link className="hover:text-blue-400" to="/landing">Landing</Link>
      
      </div>
    </nav>
  );
}

export default Navbar;

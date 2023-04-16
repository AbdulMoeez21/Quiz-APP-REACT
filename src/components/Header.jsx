import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-gray-100 px-4 py-3">
      <div>
        <h1 className="text-2xl font-bold">Quiz App</h1>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign In
        </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 ml-4 rounded">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;


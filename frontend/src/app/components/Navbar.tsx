import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between w-[80%] max-w-[1440px] m-auto py-5 px-2 align-center">
        <h1 className="hover:text-emerald-500 transition-colors"><a className="hover:text-emerald-500 transition-colors" href="#">Marius Cozma</a></h1>
      <ul className="flex flex-row gap-11 align-center">
        <li><a className="hover:text-emerald-500 transition-colors" href="#">Despre</a></li>
        <li><a className="hover:text-emerald-500 transition-colors" href="#">Portofoliu</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

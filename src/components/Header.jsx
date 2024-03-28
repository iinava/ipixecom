import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      {" "}
      <header className="shadow relative z-50 top-2 mb-5">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 rounded-lg">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
              <h1 className="text-[20px] text-orange-700 mx-3">ecom test</h1>
            </Link>

            <div
              className=" justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700 underline" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/category"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700 underline" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Category
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/usersview"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700 underline" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Users
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

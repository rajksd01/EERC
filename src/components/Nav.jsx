import { Link } from "react-router-dom";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "flowbite-react";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handelClick = () => setClick(!click);

  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bgnav">
        <ui className="text-center text-xl  p-0 list-none bg-slate-800">
          <Link to="/">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-600 hover:rounded bg-slate-800">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-600 hover:rounded bg-slate-800">
              About
            </li>
          </Link>
          <Link to="/blogs">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-600 hover:rounded bg-slate-800">
              Blog
            </li>
          </Link>
          <Link to="/projects">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-600 hover:rounded bg-slate-800">
              Projects
            </li>
          </Link>
          <Link to="/contact">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-600 hover:rounded bg-slate-800">
              Contact
            </li>
          </Link>
        </ui>
      </div>
    </>
  );

  return (
    <nav>
      <div className=" flex justify-between z-50 text-white lg:py-5 px-20 my-1 mx-1 py-4 bgnav backdrop-blur bg-white/5">
        <div className="flex items-center flex-1">
          <img src="../../public/images/eercLogo.png" className="h-12" />
        </div>
        <div className="lf:flex md:flex lg: flex-1  items center justify-end font-normal hidden ">
          <div className="flex-10">
            <ui className="flex gap-8 mr-6 text-[18px] list-none">
              <Link to="/">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Home
                </li>
              </Link>
              <Link to="/about">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  About
                </li>
              </Link>
              <Link to="/blogs">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Blog
                </li>
              </Link>
              <Link to="/projects">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Projects
                </li>
              </Link>
              <Link to="/contact">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Contact
                </li>
              </Link>

              <Button gradientMonochrome="pink" className="right-0">
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900 right-0"
                >
                  Contact <span aria-hidden="true">&rarr;</span>
                </a>
              </Button>
            </ui>
          </div>
        </div>

        <div>{click && content}</div>

        <button className="block lg:hidden transtion" onClick={handelClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;

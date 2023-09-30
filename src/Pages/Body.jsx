import { Button } from "flowbite-react";
import { createBrowserRouter } from "react-router-dom";
import Earth from "../components/Earth";
import "../CSS/Home.css";
import Nav from "../components/Nav";
import Newsletter from "../components/Newsletter";
import ServicesDetail from "../components/ServicesDetail";
import Project from "../components/Project";
import FooterWithSocialMediaIcons from "../components/FooterWithSocialMediaIcons";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import About from "./About";
import Error from "./Error";
import Blogs from "./Blogs";
import Projects from "./Projects";
import Contact from "./Contact";

function Body() {
  return (
    <div className="landing-home">
      <Nav />
      <div className="flex flex-row">
        <div className="basis-5/5 -mt-12">
          <div className="banner-content-two px-28 pt-32  firstView text-[#ffffff] ">
            <span className="sub-title text-2xl ">Hi, Welcome</span>
            <h2 className="title py-4 font-extrabold text-7xl  tracking-wide">
              Empowering The <br />{" "}
              <span className="text-[#5DB85E]">Environment</span>
              <br /> Change Through
              <br /> Research .
            </h2>
            <div className="banner-content-bottom flex pt-12">
              <Button
                gradientMonochrome="pink"
                className="rounded-3xl w-44 font-bold text-xl"
              >
                {" "}
                <a href="contact.html" className="text-xl">
                  Contact Us <span></span>
                </a>
              </Button>
              <ul className="flex ml-5 mt-2 p-2">
                <li className=" pl-5">
                  {" "}
                  <FaFacebook />{" "}
                </li>
                <li className="  pl-5">
                  {" "}
                  <FaInstagram />{" "}
                </li>
                <li className=" pl-5">
                  {" "}
                  <FaTwitter />{" "}
                </li>
                <li className="  pl-5">
                  {" "}
                  <FaLinkedin />{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" earthComponent">
          {/* <img src="../../public/images/earth.png" alt="animated earth" className='pt-4 h-full w-full'  /> */}

          <Earth />

          <ServicesDetail />

          <Project />
          <Newsletter />
          <FooterWithSocialMediaIcons />
        </div>
      </div>
    </div>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
export default Body;

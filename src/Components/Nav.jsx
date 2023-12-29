import Logo from "../assets/Logo.png";
import { Register } from "./registerButton";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
export const Nav = () => {
  return (
    <>
      <div className="text-white flex justify-between pt-8 px-10 font-semibold">
        <Link to="/">
          <img className="w-20 h-20" src={Logo} alt="Logo" />
        </Link>
        <div className="flex gap-16">
          <ul className="flex gap-16 mt-6">
            <Link to="/">
              <li className="hover:cursor-pointer hover:text-[#2b75bb]">
                Home
              </li>
            </Link>
            <ScrollLink
              to="speaker"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <li className="hover:cursor-pointer hover:text-[#2b75bb]">
                Speaker
              </li>
            </ScrollLink>
            <li className="hover:cursor-pointer hover:text-[#2b75bb]">
              Schudule
            </li>
            <li className="hover:cursor-pointer hover:text-[#2b75bb]">Venue</li>
          </ul>
          <Register />
        </div>
      </div>
    </>
  );
};

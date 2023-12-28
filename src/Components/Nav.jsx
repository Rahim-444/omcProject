import Logo from "../assets/Logo.png";
import { Register } from "./registerButton";
export const Nav = () => {
  return (
    <>
      <div className="text-white flex justify-between pt-8 px-10 font-semibold">
        <img className="w-20 h-20" src={Logo} alt="Logo" />
        <div className="flex gap-16">
          <ul className="flex gap-16 mt-6">
            <li className="hover:cursor-pointer hover:text-[#2b75bb]">Home</li>
            <li className="hover:cursor-pointer hover:text-[#2b75bb]">
              Speaker
            </li>
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

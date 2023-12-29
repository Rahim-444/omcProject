import { Link } from "react-router-dom";
export const Register = () => {
  return (
    <Link to="/Form" className="my-4">
      <button className="bg-[#2b75bb] text-white px-12 py-3  rounded-full hover:bg-white hover:text-black transition-all duration-200">
        Register
      </button>
    </Link>
  );
};

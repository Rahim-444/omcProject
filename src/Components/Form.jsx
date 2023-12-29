import PropTypes from "prop-types";
import { Nav } from "./Nav";
import { Register } from "./registerButton";
export const Form = () => {
  const Input = ({ placeholder }) => (
    <input
      type="text"
      name={placeholder}
      placeholder={placeholder}
      className="border-2 border-gray-300 rounded-xl w-1/2 px-4 py-4 mb-4 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#2b75bb] focus:border-transparent backdrop-blur-md font-semibold text-xl"
    />
  );
  Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
  };
  return (
    <div className="mx-10">
      <Nav />
      <div className="flex justify-center flex-col items-center mt-28 ">
        <Input placeholder="First name" />
        <Input placeholder="Last name" />
        <Input placeholder="Email" />
        <Input placeholder="Phone" />
        <Input placeholder="Id number" />
        <Register />
      </div>
    </div>
  );
};

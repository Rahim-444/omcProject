import { Register } from "./registerButton";
import { Timer } from "./Timer";
export const Hero = () => (
  <>
    <div className="h-1/2 mt-32 flex justify-center items-center">
      <div className="w-4/6 text-center">
        <div className="flex justify-center items-center ">
          <h1 className="text-5xl font-bold mb-12">Welcome to OMC Event</h1>
        </div>
        <div className="backdrop-blur-sm">
          <p className="font-medium text-xl mb-12 drop-shadow-2xl">
            your premier destination for delving into the world of open source
            technology. Immerse yourself in dynamic workshops, engaging panel
            discussions, and hands-on sessions led by industry leaders. Whether
            you&apos;re a seasoned professional or a newcomer, OMC Event offers
            a diverse and inclusive space for learning, networking, and
            inspiration. Join us to stay ahead of the curve and embrace the
            power of open collaboration in shaping the future of technology.
          </p>
        </div>
        <div className="flex justify-center items-center gap-12">
          <Register />
          <Button />
        </div>
        <Timer />
      </div>
    </div>
  </>
);
const Button = () => {
  return (
    <>
      <button className="bg-transparent  border-2 border-white rounded-full  text-white font-bold py-3 px-8 hover:border-[#f0af21] hover:text-[#f0af21] transition-all duration-200">
        learn more
      </button>
    </>
  );
};

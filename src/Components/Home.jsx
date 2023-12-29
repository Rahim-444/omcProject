import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { Speaker } from "./Speaker";
import { Schedule } from "./Schedule";
import EventFooter from "./Fotter";
export const Home = () => {
  return (
    <>
      <div className="mx-10 h-screen">
        <Nav />
        <Hero />
      </div>
      <div id="speaker" className="h-screen bg-[#060e17]">
        <Speaker />
      </div>
      <div id="schedule" className="h-screen">
        <Schedule />
      </div>
      <div className=" bg-[#060e17]">
        <EventFooter />
      </div>
    </>
  );
};

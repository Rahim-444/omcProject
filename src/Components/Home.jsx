import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { Speaker } from "./Speaker";
export const Home = () => {
  return (
    <>
      <div className="mx-10 h-screen">
        <Nav />
        <Hero />
      </div>
      <div id="speaker" className="h-screen bg-[#0d1116]">
        <Speaker />
      </div>
    </>
  );
};

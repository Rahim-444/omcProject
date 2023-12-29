import Line from "../assets/ScheduleWhite.svg";
import auditorium from "../assets/download.jpeg";
export const Schedule = () => {
  return (
    <>
      <div className="flex justify-center gap-20 items-center h-screen">
        <div className="flex flex-col gap-10 items-center justify-center w-1/2">
          <h1 className="font-bold text-xl"> USTHB auditorium</h1>
          <img alt="auditorium" src={auditorium} className="" />
          <p className="text-xl w-1/2 text-justify">
            USTHB Auditorium, Bab Ezzouar, Algiers, Algeria located in the heart
            of the university ,and can be found easily near the main entrance.
          </p>
          <a
            href="https://www.google.dz/maps/place/Auditorium,+Bab+Ezzouar/@36.7124495,3.1765467,17.01z/data=!4m9!1m2!2m1!1susthb+bab+ezzouar!3m5!1s0x128e518982aea437:0x3565ed14c86991bd!8m2!3d36.7146559!4d3.1789857!16s%2Fg%2F11bvtd0cvx?hl=fr&entry=ttu"
            target="_blank"
            rel="noreferrer"
            className="bg-[#46af35] text-white px-10 py-2 rounded-full hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-200"
          >
            Get Directions
          </a>
        </div>
        <div className=" h-screen">
          <div className="flex justify-center gap-10 h-full">
            <img alt="schedule" src={Line} className="w-3 h-screen" />
            <div className="flex justify-center items-center flex-col gap-[5rem]">
              <div>
                <span className="font-bold text-2xl">9:00 AM - 10:00 AM</span>
                <p className="text-xl">Registration and Welcome</p>
              </div>
              <div>
                <span className="font-bold text-2xl">10:00 AM - 11:00 AM</span>
                <p className=" text-xl">Keynote Speech</p>
              </div>
              <div>
                <span className="font-bold text-2xl">11:00 AM - 12:00 PM</span>
                <p className="text-xl">Session 1</p>
              </div>
              <div>
                <span className="font-bold text-2xl">12:00 PM - 1:00 PM</span>
                <p className="text-xl">Lunch</p>
              </div>
              <div>
                <span className="font-bold text-2xl">1:00 PM - 2:00 PM</span>
                <p className="text-xl ">Session 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

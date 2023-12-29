import speaker from "../assets/ali-morshedlou-WMD64tMfc4k-unsplash.jpg";
export const Speaker = () => {
  return (
    <>
      <div className="flex justify-around items-center mx-10 h-screen ">
        <div className="flex flex-col w-1/2">
          <h1 className="text-5xl font-bold text-[#2b75bb] mb-12 text-justify">
            Speaker
          </h1>
          <p className=" text-xl">
            Introducing Belkacemi Abderrahim, our distinguished speaker for
            today&#39;s event. With a wealth of expertise in open-source
            libraries for the front end, Belkacemi is at the forefront of
            innovation in the ever-evolving world of web development. His
            commitment to advancing the field is reflected in his substantial
            contributions to open-source projects, making him a respected figure
            in the developer community. Get ready to gain valuable insights as
            Belkacemi shares his knowledge, experience, and passion for creating
            efficient and dynamic front-end solutions through the power of open
            source. Welcome, Belkacemi Abderrahim, to an enlightening session
            that promises to inspire and elevate our understanding of front-end
            development.
          </p>
        </div>
        <img
          alt="speaker"
          src={speaker}
          className=" w-80 h-auto drop-shadow-md border-2 border-[#f4b028] rounded-full"
        />
      </div>
    </>
  );
};

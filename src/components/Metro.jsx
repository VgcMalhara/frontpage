import star from "../assets/star.png";
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";
import photo4 from "../assets/photo4.png";
import Card from "./Card";

const Metro = () => {
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 bg-white mx-auto max-w-6xl border-2 border-black border-t-0 ">
      {/* Left Section */}
      <div className="w-full lg:flex items-center border-black p-6 border-r-0 lg:border-r-2">
      <div className="mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Learn from experts
            <br /> Grow your career
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer.
          </p>
          <button className="bg-gray-800 w-full sm:w-[301px] h-[66px] text-white text-xl py-2 px-4 hover:bg-gray-300 mt-6 rounded-[40px] shadow-lg">
            Explore our mentors
          </button>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-6 w-full rounded-lg border border-gray-800 mt-8 p-4">
            {[
              { value: "34+", text: "Lorem ipsum dolor sit amet, consectetur adipiscing" },
              { value: "245K", text: "Lorem ipsum dolor sit amet, consectetur adipiscing" },
              { value: "15+", text: "Lorem ipsum dolor sit amet, consectetur adipiscing" },
              { value: "4.89", text: "Lorem ipsum dolor sit amet, consectetur adipiscing" }
            ].map((item, index) => (
              <div key={index} className="p-4 text-center">
                <p className="text-2xl font-bold">{item.value}</p>
                <p className="text-gray-500 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-6">
        <div className="flex flex-col gap-6 justify-between ">
          <Card imgSrc={star} label="branding" width="248px" height="240px" />
          <Card imgSrc={photo1} label="image1" />
        </div>
        <div className="flex flex-col gap-6 justify-between lg:h-full">
          <Card imgSrc={photo2} label="image2" />
          <Card imgSrc={photo3} label="image3" />
          <Card imgSrc={photo4} label="image4" />
        </div>
      </div>
    </div>
  );
};

export default Metro;

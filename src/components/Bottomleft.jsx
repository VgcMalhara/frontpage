import rainbow from '../assets/Rainbow.png';
import Card from './Card';
import logo from '../assets/logo.png';

const Bottomleft = () => {
  return (
    <div className="flex flex-col items-start max-w-[90%] sm:max-w-lg mx-auto">
      {/* Rainbow Logo */}
      <Card imgSrc={rainbow} label="rainbow" width="176px" height="88px" />

      {/* Title */}
      <h2 className="mt-2 text-3xl sm:text-5xl font-bold">
        Bring your<br />community together
      </h2>

      {/* Description */}
      <p className="mt-4 text-lg sm:text-xl text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus
        semper habitant arcu eget. Et integer facilisi eget.
      </p>

      {/* Get Started Button */}
      <button className="min-w-[166px] px-6 py-2 rounded-[40px] bg-black text-white text-lg sm:text-xl mt-6 shadow-lg hover:bg-gray-800">
        Get started
      </button>

      {/* Testimonial Box */}
      <div className="max-w-lg w-full border-2 flex justify-center items-center shadow-lg mt-12 p-6">
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <p className="text-sm sm:text-base">
            “The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for
            those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form, accompanied
            by English versions from the 1914 translation by H. Rackham.”
          </p>
        </div>
      </div>

      {/* Social Media Logo */}
      <div className="mt-12 mb-10">
        <Card imgSrc={logo} label="socialmedia" width="176px" height="32px" />
      </div>
    </div>
  );
};

export default Bottomleft;

import { FC, useState } from "react";
import ApprovedModal from "../componenets/ApprovedModal";

const Landing: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);

  const onClickApprovedModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex min-h-screen mx-auto w-full  items-center justify-center textcolor">
      <img
        className="fixed left-0 top-0 w-full h-full -z-10 object-fill"
        src="/images/landingbackground.png"
        alt="background"
      />
      <div className="mb-24">
        <div className="flex flex-col gap-8">
          <h1 className="text-9xl crang">LET'S MINT!</h1>
          <div className="textcolor crang text-2xl">
            Click below and Let's get Authorize and Buy NFT
          </div>
        </div>
        <ul className="">
          <button
            className="border-2 smash text-4xl bg-white border-none text-black rounded-lg shadow-inner shadow-slate-600 py-2 px-2 mt-6 font-bold hover:scale-110 hover:bg-slate-200 duration-200 "
            onClick={onClickApprovedModal}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            GET STARTED
          </button>
        </ul>
      </div>
      {isOpen && <ApprovedModal setIsOpen={setIsOpen} />}

      {isHover ? (
        <div className="bottom-[400px] right-[600px] duration-200 fixed image ">
          <img
            className="fixed duration-300 image"
            src="/images/kitty.png"
            alt="kitty"
          />
        </div>
      ) : (
        <div className="image">
          <img
            className="-bottom-[400px] right-[350px] duration-300 fixed image"
            src="/images/kitty.png"
            alt="kitty"
          />
        </div>
      )}
    </div>
  );
};

export default Landing;
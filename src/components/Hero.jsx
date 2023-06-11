import HeroDesktop from "../assets/images/image-hero-desktop.png";
import HeroMobile from "../assets/images/image-hero-mobile.png";
import MeetImg from "../assets/images/client-meet.svg";
import MakerImg from "../assets/images/client-maker.svg";
import DataBizImg from "../assets/images/client-databiz.svg";
import AudioPhileImg from "../assets/images/client-audiophile.svg";

const Hero = () => {
  return (
    <div className="mb-12 md:flex 1.5xl:max-w-screen-1.5xl 1.5xl:ml-auto 1.5xl:mr-auto md:px-10 lg:px-20 lg:pt-9 xl:px-32">
      <picture className="md:px-4 lg:px-0 flex-[5]">
        <source media="(max-width:767px)" srcSet={HeroMobile} />
        <source media="(min-width:768px)" srcSet={HeroDesktop} />
        <img
          alt="Make remote work"
          src={HeroMobile}
          className="mr-auto ml-auto"
        />
      </picture>
      <div className="mx-4 lg:ml-8 pt-10 md:-order-1 md:self-center lg:self-start flex-[7]">
        <div className="px-1 flex flex-col justify-center lg:pt-16">
          <h1 className="text-[2.19rem] font-Epilogue font-bold text-center md:text-left xl:text-5xl 1.5xl:text-[4.85rem] 1.5xl:leading-[5rem]">
            <span>Make </span>
            <br className="hidden lg:block" />
            remote work
          </h1>
          <p className="pt-3 text-center font-Epilogue leading-[1.65rem] text-medium-gray md:text-left xl:pt-12 lg:max-w-[27rem] xl:text-lg">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="flex items-center justify-center self-center md:self-start mt-6 h-12 px-6 rounded-xl font-bold text-white bg-black hover:text-black hover:border hover:bg-transparent transition-all duration-700 xl:mt-12 xl:h-14 xl:px-[2.1rem] xl:rounded-2xl text-[1.16rem]">
            Learn more
          </button>
        </div>
        <div className="mt-12 flex items-center justify-center gap-x-8 xl:gap-x-10 md:justify-start xl:mt-[6.5rem] xl:pt-1 xl:pl-2">
          <img
            alt="databiz company"
            src={DataBizImg}
            className="w-20 h-4 xl:w-28 xl:h-6"
          />
          <img
            alt="audiophile company"
            src={AudioPhileImg}
            className="w-14 h-6 xl:w-[4.5rem] xl:h-9"
          />
          <img
            alt="meet company"
            src={MeetImg}
            className="w-16 h-4 xl:w-[5.5rem] xl:h-5"
          />
          <img
            alt="maker company"
            src={MakerImg}
            className="w-16 h-4 xl:w-20 xl:h-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

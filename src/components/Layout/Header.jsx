import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import Menu from "../Menu/Menu";

const Header = () => {
  return (
    <header className="flex justify-between px-4 py-6 lg:justify-start lg:gap-x-16 lg:px-10 lg:py-8 max-w-screen-1.5xl 1.5xl:ml-auto 1.5xl:mr-auto">
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;

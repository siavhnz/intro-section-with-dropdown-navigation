import { menu } from "../../../store/menu";
import Authentication from "../Authentication";
import DesktopMenuItem from "./DesktopMenuItem";

const DesktopNavbar = () => {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex gap-x-10 items-start">
        {menu.map((item, index) => {
          return <DesktopMenuItem item={item} key={index} />;
        })}
      </ul>
      <Authentication />
    </nav>
  );
};

export default DesktopNavbar;

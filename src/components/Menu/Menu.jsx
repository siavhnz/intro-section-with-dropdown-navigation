import { useState } from "react";
import { ReactComponent as Hambur } from "../../assets/images/icon-menu.svg";
import MobileNavbar from "./Mobile/MobileNavbar";
import DesktopNavbar from "./Desktop/DesktopNavbar";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:flex-1">
      <button
        aria-label="open menu"
        onClick={handleOpenMenu}
        className="lg:hidden"
      >
        <Hambur aria-hidden={true} aria-label={false} />
      </button>
      <MobileNavbar isOpen={isOpen} closeMenu={handleCloseMenu} />
      <DesktopNavbar />
    </div>
  );
};

export default Menu;

import Drawer from "@mui/material/Drawer";
import { ReactComponent as Close } from "../../../assets/images/icon-close-menu.svg";
import { menu } from "../../../store/menu";
import MobileMenuItem from "./MobileMenuItem";
import Authentication from "../Authentication";

const MobileNavbar = ({ isOpen, closeMenu }) => {
  return (
    <Drawer
      disablePortal={true}
      anchor="right"
      open={isOpen}
      onClose={closeMenu}
    >
      <nav className="min-w-[15rem] flex flex-col min-h-screen">
        <button
          aria-label="close menu"
          onClick={closeMenu}
          className="self-end py-5 px-4"
        >
          <Close aria-hidden={true} aria-label={false} />
        </button>
        <ul className="px-6 pt-3 flex flex-col gap-y-5 text-medium-gray">
          {menu.map((item, index) => {
            return <MobileMenuItem item={item} key={index} />;
          })}
        </ul>
        <Authentication />
      </nav>
    </Drawer>
  );
};

export default MobileNavbar;

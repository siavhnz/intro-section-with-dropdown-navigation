import { useState } from "react";
import MobileDropDown from "./MobileDropdown";
import { ReactComponent as ArrowUp } from "../../../assets/images/icon-arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../../assets/images/icon-arrow-down.svg";

const MobileMenuItem = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <li>
      {item.submenu ? (
        <>
          <button
            type="button"
            className="font-Epilogue capitalize flex items-center gap-x-4"
            aria-haspopup="menu"
            onClick={() => setDropdown((prev) => !prev)}
          >
            <span>{item.title}</span>
            <span>{dropdown ? <ArrowDown /> : <ArrowUp />}</span>
          </button>
          <MobileDropDown submenus={item.submenu} dropdown={dropdown} />
        </>
      ) : (
        <a href="#" className="font-Epilogue capitalize">
          <span>{item.title}</span>
        </a>
      )}
    </li>
  );
};

export default MobileMenuItem;

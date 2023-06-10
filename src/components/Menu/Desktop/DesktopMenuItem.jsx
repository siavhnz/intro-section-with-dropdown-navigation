import { ReactComponent as ArrowUp } from "../../../assets/images/icon-arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../../assets/images/icon-arrow-down.svg";
import { useState } from "react";
import DesktopDropDown from "./DesktopDropdown";
import { motion } from "framer-motion";

const DesktopMenuItem = ({ item }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = anchorEl ? true : false;

  const handleClick = (event) => {
    if (!anchorEl) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = (event) => {
    setAnchorEl(null);
  };

  return (
    <li
      className={`${item.submenu ? "relative flex" : "flex"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {item.submenu ? (
        <>
          <div
            className="font-Epilogue capitalize flex items-center gap-x-2 text-sm"
            aria-haspopup="true"
          >
            <span className="transition-all duration-700 text-medium-gray hover:cursor-pointer hover:text-black">
              {item.title}
            </span>
            <span>{open ? <ArrowDown /> : <ArrowUp />}</span>
          </div>

          {anchorEl && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-4 right-0 flex"
            >
              <ul className="mt-4 bg-almost-white shadow-sm shadow-slate-400 flex flex-col gap-y-4 p-6 rounded-xl shrink-0">
                <DesktopDropDown submenus={item.submenu} />
              </ul>
            </motion.div>
          )}
        </>
      ) : (
        <a
          href="#"
          className="text-medium-gray font-Epilogue capitalize text-sm transition-all duration-700 hover:cursor-pointer hover:text-black"
        >
          {item.title}
        </a>
      )}
    </li>
  );
};

export default DesktopMenuItem;

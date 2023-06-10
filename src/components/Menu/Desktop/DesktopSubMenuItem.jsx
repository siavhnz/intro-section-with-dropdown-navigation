import { useState } from "react";
import { TfiAngleRight } from "react-icons/tfi";
import DesktopDropDown from "./DesktopDropdown";
import { motion } from "framer-motion";

const DesktopSubMenuItem = ({ item, onClose }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = anchorEl ? true : false;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = (event) => {
    setAnchorEl(null);
  };

  return (
    <li
      className={`${item.submenu ? "relative" : ""}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item.submenu ? (
        <>
          <div
            className="font-Epilogue text-medium-gray capitalize flex items-center gap-x-4  transition-all duration-700 hover:cursor-pointer hover:text-black"
            aria-haspopup="true"
          >
            {item.icon && (
              <img src={item.icon} alt={item.title} className="w-5" />
            )}
            <span>{item.title}</span>
            <span>
              <TfiAngleRight className="w-2" />
            </span>
          </div>

          {anchorEl && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-1 left-full flex"
            >
              <ul className=" bg-almost-white shadow-sm shadow-slate-400 flex flex-col ml-8 p-6 gap-y-4 rounded-xl shrink-0">
                <DesktopDropDown submenus={item.submenu} />
              </ul>
            </motion.div>
          )}
        </>
      ) : (
        <a
          href="#"
          className="font-Epilogue capitalize flex items-center gap-x-4"
        >
          {item.icon && (
            <img src={item.icon} alt={item.title} className="w-4" />
          )}
          <span className="text-medium-gray shrink-0 transition-all duration-700 hover:cursor-pointer hover:text-black">
            {item.title}
          </span>
        </a>
      )}
    </li>
  );
};

export default DesktopSubMenuItem;

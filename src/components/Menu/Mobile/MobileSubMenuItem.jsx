import { useState } from "react";
import MobileDropDown from "./MobileDropdown";
import { ReactComponent as ArrowUp } from "../../../assets/images/icon-arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../../assets/images/icon-arrow-down.svg";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: -10,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MobileSubMenuItem = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <motion.li variants={variants}>
      {item.submenu ? (
        <>
          <button
            type="button"
            className="font-Epilogue capitalize flex items-center gap-x-4"
            aria-haspopup="menu"
            onClick={() => setDropdown((prev) => !prev)}
          >
            {item.icon && (
              <img src={item.icon} alt={item.title} className="w-5" />
            )}
            <span>{item.title}</span>
            <span>{dropdown ? <ArrowDown /> : <ArrowUp />}</span>
          </button>
          <MobileDropDown submenus={item.submenu} dropdown={dropdown} />
        </>
      ) : (
        <a
          href="#"
          className="font-Epilogue capitalize flex items-center gap-x-4"
        >
          {item.icon && (
            <img src={item.icon} alt={item.title} className="w-4" />
          )}
          <span>{item.title}</span>
        </a>
      )}
    </motion.li>
  );
};

export default MobileSubMenuItem;

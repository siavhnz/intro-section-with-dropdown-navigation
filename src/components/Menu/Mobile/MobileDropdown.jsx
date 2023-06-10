import MobileSubMenuItem from "./MobileSubMenuItem";
import { AnimatePresence, motion } from "framer-motion";

const containerVariants = {
  open: {
    height: "auto",
  },
  closed: {
    height: 0,
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const MobileDropDown = ({ submenus, dropdown }) => {
  return (
    <AnimatePresence>
      {dropdown && (
        <motion.div
          variants={containerVariants}
          initial="closed"
          animate="open"
        >
          <motion.ul
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            className="pl-6 pt-7 pb-1 flex flex-col gap-y-[1.1rem]"
          >
            {submenus.map((submenu, index) => (
              <MobileSubMenuItem item={submenu} key={index} />
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileDropDown;

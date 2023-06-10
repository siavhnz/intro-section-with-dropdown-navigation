import DesktopSubMenuItem from "./DesktopSubMenuItem";

const DesktopDropDown = ({ submenus }) => {
  return (
    <>
      {submenus.map((submenu, index) => (
        <DesktopSubMenuItem item={submenu} key={index} />
      ))}
    </>
  );
};

export default DesktopDropDown;

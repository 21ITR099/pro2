import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import { logo, logoLight } from "../../../assets/images";
import Image from "../../designLayouts/Image";
import { navBarList } from "../../../constants";
import Flex from "../../designLayouts/Flex";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
  const location = useLocation();
  useEffect(() => {
    let ResponsiveMenu = () => {
      if (window.innerWidth < 667) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
  }, []);

  return (
    <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <Flex className="flex items-center justify-between h-full">
          <Link to="/">
            <div>
              <Image className="w-20 object-cover" imgSrc="data:image/jpeg;base64,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" />
            </div>
          </Link>
          <div>
            {showMenu && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center w-auto z-50 p-0 gap-2"
              >
                <>
                  {navBarList.map(({ _id, title, link }) => (
                    <NavLink
                      key={_id}
                      className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                      to={link}
                      state={{ data: location.pathname.split("/")[1] }}
                    >
                      <li>{title}</li>
                    </NavLink>
                  ))}
                </>
              </motion.ul>
            )}
            <HiMenuAlt2
              onClick={() => setSidenav(!sidenav)}
              className="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
            />
            {sidenav && (
              <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-[80%] h-full relative"
                >
                  <div className="w-full h-full bg-primeColor p-6">
                    <img
                      className="w-28 mb-6"
                      src={logoLight}
                      alt="logoLight"
                    />
                    <ul className="text-gray-200 flex flex-col gap-2">
                      {navBarList.map((item) => (
                        <li
                          className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                          key={item._id}
                        >
                          <NavLink
                            to={item.link}
                            state={{ data: location.pathname.split("/")[1] }}
                            onClick={() => setSidenav(false)}
                          >
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <h1
                        onClick={() => setCategory(!category)}
                        className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                      >
                        Shop by Category{" "}
                        <span className="text-lg">{category ? "-" : "+"}</span>
                      </h1>
                      {category && (
                        <motion.ul
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="text-sm flex flex-col gap-1"
                        >
                          <li className="headerSedenavLi"></li>
                          <li className="headerSedenavLi"></li>
                          <li className="headerSedenavLi"></li>
                          <li className="headerSedenavLi"></li>
                          <li className="headerSedenavLi"></li>
                        </motion.ul>
                      )}
                    </div>
                    <div className="mt-4">
                      <h1
                        onClick={() => setBrand(!brand)}
                        className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                      >
                        Shop by Brand
                        <span className="text-lg">{brand ? "-" : "+"}</span>
                      </h1>
                      {brand && (
                        <motion.ul
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="text-sm flex flex-col gap-1"
                        >
                          <li className="headerSedenavLi"></li>
                          <li className="headerSedenavLi"></li>
                          <li className="headerSedenavLi"></li>
                          <li className="headerSedenavLi"></li>
                          <li className="headerSedenavLi"></li>
                        </motion.ul>
                      )}
                    </div>
                  </div>
                  <span
                    onClick={() => setSidenav(false)}
                    className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                  >
                    <MdClose />
                  </span>
                </motion.div>
              </div>
            )}
          </div>
        </Flex>
      </nav>
    </div>
  );
};

export default Header;

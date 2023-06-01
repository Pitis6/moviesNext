"use client";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";

const NavBarContainer = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <NavBar isActive={isActive} />;
};

export default NavBarContainer;
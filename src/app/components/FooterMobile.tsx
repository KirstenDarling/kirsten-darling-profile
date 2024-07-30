import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { FaAddressCard, FaDatabase } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { activeNavItemPersistState } from "../recoil/navigationAtom.ts";

const FooterMobile = () => {
  const [activeNavItem, setActiveNavItem] = useRecoilState(
    activeNavItemPersistState
  ); // Use the selector  console.log(activeNavItem);

  return (
    <Box sx={{ width: "100%", bottom: "0" }} className="fixed sm:hidden">
      <BottomNavigation
        showLabels
        value={activeNavItem}
        onChange={(_, newValue) => setActiveNavItem(newValue)}
        sx={{ width: "100%", backgroundColor: "white" }}
      >
        <BottomNavigationAction
          label="Study Portal"
          href="/study-portal"
          icon={<FaLaptopCode size={25} />}
          sx={{
            "&.Mui-selected": { color: "#A855F7" }, // Apply purple when selected
            color: "darkgrey",
          }}
        />
        <BottomNavigationAction
          label="Home"
          href="/"
          icon={<FaHeart size={25} />}
          sx={{
            "&.Mui-selected": { color: "#A855F7" }, // Apply purple when selected
            color: "darkgrey",
          }}
        />
        <BottomNavigationAction
          label="About Kirsten"
          href="/about"
          icon={<FaAddressCard size={25} />}
          sx={{
            "&.Mui-selected": { color: "#A855F7" }, // Apply purple when selected
            color: "darkgrey",
          }}
        />
      </BottomNavigation>
    </Box>
  );
};

export default FooterMobile;

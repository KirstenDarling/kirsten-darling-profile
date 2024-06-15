import Image, { StaticImageData } from "next/image";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { FaAddressCard, FaDatabase } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const FooterMobile = () => {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: "100%", bottom: "0" }} className="fixed sm:hidden">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ width: "100%", backgroundColor: "white" }}
      >
        <BottomNavigationAction
          label="Study Portal"
          href="/study-portal"
          icon={<FaLaptopCode size={25} />}
          sx={{ color: "darkgrey" }}
        />
        <BottomNavigationAction
          label="Home"
          icon={<FaHeart size={25} />}
          sx={{ color: "darkgrey" }}
        />
        <BottomNavigationAction
          label="About Kirsten"
          href="/about"
          icon={<FaAddressCard size={25} />}
          sx={{ color: "darkgrey" }}
        />
      </BottomNavigation>
    </Box>
  );
};

export default FooterMobile;

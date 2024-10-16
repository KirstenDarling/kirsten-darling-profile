import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { FaLaptopCode } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { activeNavItemPersistState } from "../recoil/navigationAtom.ts";

const FooterMobile = () => {
  const [activeNavItem, setActiveNavItem] = useRecoilState(
    activeNavItemPersistState
  );

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
            "&.Mui-selected": { color: "#A855F7" },
            color: "darkgrey",
          }}
        />
        <BottomNavigationAction
          label="Home"
          href="/"
          icon={<FaHeart size={25} />}
          sx={{
            "&.Mui-selected": { color: "#A855F7" },
            color: "darkgrey",
          }}
        />
        <BottomNavigationAction
          label="About Kirsten"
          href="/about"
          icon={<FaAddressCard size={25} />}
          sx={{
            "&.Mui-selected": { color: "#A855F7" },
            color: "darkgrey",
          }}
        />
      </BottomNavigation>
    </Box>
  );
};

export default FooterMobile;

import { HeaderMain } from "./HeaderMain";
import { NavigationBar } from "./NavigationBar";
import { TopBar } from "./TopBar";

const Header = () => {
  return (
    <header>
      <TopBar />
      <HeaderMain />
      <NavigationBar />
    </header>
  );
};

export default Header;

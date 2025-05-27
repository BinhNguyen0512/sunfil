import { WrapperPage } from "../WrapperPage";
import { HeaderMain } from "./HeaderMain";
import { NavigationBar } from "./NavigationBar";
import { TopBar } from "./TopBar";

const Header = () => {
  return (
    <header>
      <WrapperPage>
        <TopBar />
        <HeaderMain />
        <NavigationBar />
      </WrapperPage>
    </header>
  );
};

export default Header;

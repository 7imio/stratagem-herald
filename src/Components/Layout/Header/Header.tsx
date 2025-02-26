import { useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import { useDispatch } from "react-redux";
import { switchTheme } from "../../../Store/themeSlice";
import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";

const Header: React.FC = () => {
  const { isDarkTheme } = useSelector((state: RootState) => state.themeManager);
  const dispatch = useDispatch();

  const handleSwitchTheme = () => {
    dispatch(switchTheme());
  };

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkTheme]);

  return (
    <header className="flex flex-row w-full bg-background border-primary text-primary sticky bottom-0 h-20">
      <div className="flex border-2 w-1/4 h-full justify-center content-center align-middle">
        <p>Options</p>
      </div>
      <div className="flex border-2 w-1/2 h-full justify-center content-center align-middle">
        <p>Title</p>
      </div>
      <div className="flex border-2 w-1/4 h-full justify-center content-center align-middle">
        <button
          className="border-2 p-1 rounded-full"
          onClick={handleSwitchTheme}
        >
          {isDarkTheme ? <Moon /> : <Sun />}
        </button>
      </div>
    </header>
  );
};

export default Header;

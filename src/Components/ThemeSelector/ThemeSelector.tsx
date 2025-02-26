import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchTheme } from "../../Store/themeSlice";
import { RootState } from "../../Store/store";

const ThemeSelector: React.FC = () => {
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
    <button className="border-2 p-1 rounded-full" onClick={handleSwitchTheme}>
      {isDarkTheme ? <Moon /> : <Sun />}
    </button>
  );
};

export default ThemeSelector;

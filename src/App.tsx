import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setIsPlaying } from "./Store/gameSlice";
import { RootState } from "./Store/store";
import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/Footer/Footer";

function App() {
  const dispatch = useDispatch();
  const { isPlaying } = useSelector((state: RootState) => state.gameManager);

  const handleClick = () => {
    dispatch(setIsPlaying(!isPlaying));
  };

  console.log(isPlaying, setIsPlaying, dispatch);

  return (
    <div className="min-h-screen min-w-full flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <button
          className="border-2 rounded-3xl bg-amber-100 px-2"
          onClick={handleClick}
        >
          play is {isPlaying ? "on" : "off"}
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;

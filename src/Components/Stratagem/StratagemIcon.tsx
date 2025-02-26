import { useState } from "react";
import { Stratagem } from "../../Interfaces/Stratagem";
import StratagemCard from "./StratagemCard";

interface StratagemIconProps {
  stratagem: Stratagem;
}

const StratagemIcon: React.FC<StratagemIconProps> = ({ stratagem }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const imageUrl = `${apiUrl}${stratagem.imageUrl}`;

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <img className="h-20 w-20" src={imageUrl} onClick={handleClick} />
      {isClicked && (
        <>
          <div className="h-screen w-screen absolute bg-gray-700 opacity-75"></div>
          <div
            className="h-screen w-screen absolute flex items-center justify-center"
            onClick={handleClick}
          >
            <StratagemCard stratagem={stratagem} imageUrl={imageUrl} />
          </div>
        </>
      )}
    </>
  );
};

export default StratagemIcon;

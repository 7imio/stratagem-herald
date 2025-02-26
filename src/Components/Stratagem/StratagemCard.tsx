import {
  ArrowBigDown,
  ArrowBigLeft,
  ArrowBigRight,
  ArrowBigUp,
} from "lucide-react";
import { CodeDirection, Stratagem } from "../../Interfaces/Stratagem";
import { useEffect, useState } from "react";

interface StratagemCardProps {
  stratagem: Stratagem;
  imageUrl: string;
}
const StratagemCard: React.FC<StratagemCardProps> = ({
  stratagem,
  imageUrl,
}) => {
  const [inputs, setInputs] = useState<CodeDirection[]>([]);
  const [isGood, setIsGood] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    console.log("useEffect input");
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      if (handleCheckIfArrowPressed(e)) {
        setInputs([...inputs, handleKeyPress(e)]);
        if (inputs === stratagem.code) {
          setIsGood(true);
        }
      }
    });
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [inputs, stratagem.code]);

  useEffect(() => {
    console.log("useEffect isError");
    if (isError) {
      setIsError(false);
      setInputs([]);
    }
  }, [isError]);

  const handleKeyPress = (e: KeyboardEvent): CodeDirection => {
    switch (e.key) {
      case "ArrowLeft":
        return CodeDirection.LEFT;
      case "ArrowRight":
        return CodeDirection.RIGHT;
      case "ArrowUp":
        return CodeDirection.UP;
      case "ArrowDown":
        return CodeDirection.DOWN;
      default:
        throw new Error("not a good input");
    }
  };

  const handleCheckIfArrowPressed = (e: KeyboardEvent): boolean => {
    switch (e.key) {
      case "ArrowLeft":
      case "ArrowRight":
      case "ArrowUp":
      case "ArrowDown":
        return true;
      default:
        return false;
    }
  };

  const handleChangeCharcodeToArrows = (code: CodeDirection[]) => {
    return code?.map((char) => {
      switch (char) {
        case CodeDirection.UP:
          return <ArrowBigUp size={46} />;
        case CodeDirection.DOWN:
          return <ArrowBigDown size={46} />;
        case CodeDirection.LEFT:
          return <ArrowBigLeft size={46} />;
        case CodeDirection.RIGHT:
          return <ArrowBigRight size={46} />;
      }
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-120 w-100 border-4 bg-gray-500 rounded-4xl">
      <p className="text-3xl">{stratagem.name}</p>
      <img className="h-50 w-50" src={imageUrl} />
      <p className="text-3xl pb-1">{stratagem.type.toLocaleUpperCase()}</p>
      <div className="flex flex-row">
        {handleChangeCharcodeToArrows(stratagem?.code)}
      </div>
      <div className="border-y-4 h-20 w-full flex items-center justify-center">
        {isGood ? <>GOOD !</> : handleChangeCharcodeToArrows(inputs)}
      </div>
    </div>
  );
};
export default StratagemCard;

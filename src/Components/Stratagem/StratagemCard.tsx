import { useEffect, useState } from "react";
import { CodeDirection, Stratagem } from "../../Interfaces/Stratagem";
import { handleKeyPress } from "../helpers/keyboardHelper";
import CharcodeToArrow from "./CharcodeToArrow";

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
    document.addEventListener("keydown", handleStratagemInput);
    return () => {
      document.removeEventListener("keydown", handleStratagemInput);
    };
  }, [inputs]);

  const handleStratagemInput = (e: KeyboardEvent) => {
    const currentInput = handleKeyPress(e);
    const currentStratagemCode = stratagem.code[inputs.length]; // get the current code arrow to check with the current input
    if (isCurrentInputValid(currentInput, currentStratagemCode)) {
      setInputs((prev) => [...prev, currentInput]); // add the current input to the inputs array
      if (inputs.length + 1 === stratagem.code.length) {
        setIsGood(true); // if all inputs are correct, set isGood to true
        resetInputs();
      }
    } else {
      setIsError(true); // if the input is not correct, set isError to true
      resetInputs(); // wipe inputs after 1s delay
    }
  };

  const resetInputs = () => {
    setTimeout(() => {
      setInputs([]); // wipe inputs after 1s delay
      setIsGood(false);
      setIsError(false); // reset isError
    }, 1000);
  };

  const isCurrentInputValid = (
    currentStratagemInput: CodeDirection,
    currentStratagemCode: CodeDirection
  ): boolean => {
    if (currentStratagemInput !== currentStratagemCode) {
      setIsError(true);
      return false;
    }
    return true;
  };

  const handleChangeCharcodeToArrows = (code: CodeDirection[]) => {
    return code?.map((char, index) => {
      return <CharcodeToArrow key={`${stratagem.name}-${index}`} char={char} />;
    });
  };

  const inputDisplay = () => {
    if (isGood) {
      return <p>GOOD ! </p>;
    }
    if (isError) {
      return <p className="text-red-500">ERROR !</p>;
    }
    return handleChangeCharcodeToArrows(inputs);
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
        {inputDisplay()}
      </div>
    </div>
  );
};
export default StratagemCard;

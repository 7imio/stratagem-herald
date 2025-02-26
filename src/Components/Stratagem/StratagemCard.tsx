import {
  ArrowBigDown,
  ArrowBigLeft,
  ArrowBigRight,
  ArrowBigUp,
} from "lucide-react";
import { CodeDirection, Stratagem } from "../../Interfaces/Stratagem";

interface StratagemCardProps {
  stratagem: Stratagem;
  imageUrl: string;
}
const StratagemCard: React.FC<StratagemCardProps> = ({
  stratagem,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col justify-center items-center h-100 w-100 border-4 bg-gray-500 rounded-4xl">
      <p className="text-3xl">{stratagem.name}</p>
      <img className="h-50 w-50" src={imageUrl} />
      <p className="text-3xl pb-1">{stratagem.type.toLocaleUpperCase()}</p>
      <div className="flex flex-row">
        {stratagem?.code?.map((char) => {
          switch (char) {
            case CodeDirection.UP:
              return <ArrowBigUp size={46} />;
            case CodeDirection.DOWN:
              return <ArrowBigDown size={46} />;
            case CodeDirection.LEFT:
              return <ArrowBigLeft size={46} />;
            case CodeDirection.RIGHT:
              return <ArrowBigRight size={46} />;
            default:
              break;
          }
          return <p>{char}</p>;
        })}
      </div>
    </div>
  );
};
export default StratagemCard;

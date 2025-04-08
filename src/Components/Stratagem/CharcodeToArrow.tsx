import { ArrowBigDown, ArrowBigLeft, ArrowBigRight, ArrowBigUp } from 'lucide-react';
import { FC } from 'react';
import { CodeDirection } from '../../Interfaces/Stratagem';

interface CharcodeToArrowProps {
    char:CodeDirection;
}

const CharcodeToArrow:FC<CharcodeToArrowProps> = ({ char }) => {
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
  };


export default CharcodeToArrow;
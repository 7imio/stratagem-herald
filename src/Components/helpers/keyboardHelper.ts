import { CodeDirection } from '../../Interfaces/Stratagem';

export const handleKeyPress = (e: KeyboardEvent): CodeDirection => {
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
        throw new Error ("invalid key pressed");
    }
  };
  
export const handleCheckIfArrowPressed = (e: KeyboardEvent): boolean => {
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
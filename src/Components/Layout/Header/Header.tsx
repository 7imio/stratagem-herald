import ThemeSelector from "../../ThemeSelector/ThemeSelector";

const Header: React.FC = () => {
  return (
    <header className="flex flex-row w-full bg-background border-primary text-primary sticky bottom-0 h-20">
      <div className="flex border-2 w-1/4 h-full justify-center content-center align-middle">
        <p>Options</p>
      </div>
      <div className="flex border-2 w-1/2 h-full justify-center content-center align-middle">
        <p>Title</p>
      </div>
      <div className="flex border-2 w-1/4 h-full justify-center content-center align-middle">
        <ThemeSelector />
      </div>
    </header>
  );
};

export default Header;

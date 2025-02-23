const Header: React.FC = () => {
  return (
    <header className="flex flex-row w-full fixed top-0 h-15">
      <div className="flex border-2 w-1/4 border-amber-700 justify-center content-center align-middle">
        Options
      </div>
      <div className="flex border-2 w-1/2 border-amber-700 justify-center content-center align-middle">
        Title
      </div>
      <div className="flex border-2 w-1/4 border-amber-700 justify-center content-center align-middle">
        switch night/day
      </div>
    </header>
  );
};

export default Header;

const Content: React.FC = () => {
  return (
    <div className="h-fit">
      {Array.from({ length: 10 }).map(() => (
        <div>Hello World</div>
      ))}
      ZAKAROUME
    </div>
  );
};

export default Content;

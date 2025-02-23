const Content: React.FC = () => {
  return (
    <div>
      {Array.from({ length: 100 }).map(() => (
        <div>Hello World</div>
      ))}
      ;
    </div>
  );
};

export default Content;

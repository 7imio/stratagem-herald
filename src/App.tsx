import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/Footer/Footer";
import Content from "./Components/Layout/Content/Content";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col bg-background text-primary overflow-hidden">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

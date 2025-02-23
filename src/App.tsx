import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/Footer/Footer";
import Content from "./Components/Layout/Content/Content";

function App() {
  return (
    <div className="min-h-screen min-w-full flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

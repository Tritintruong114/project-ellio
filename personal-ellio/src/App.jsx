import { Outlet } from "react-router-dom";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import Footer from "./components/Footer";
import Header from "./components/Header";
feature / login;
function App() {
  return (
    <div className="flex flex-col h-full w-full relative">
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;

// import Header from "./components/Header";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <h1> Heading As NavBar </h1>
      {/* we call them by outlet */}
      {/* <Header /> */}
      <Outlet />
    </>
  );
}

export default App;

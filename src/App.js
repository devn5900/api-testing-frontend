import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Singup from "./components/Singup";
import Login from "./components/Login";
import Notes from "./components/Notes";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Singup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </>
  );
}

export default App;

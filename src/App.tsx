import { Routes, Route } from "react-router-dom";
import ExplainPage from "./pages/ExplainPage";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explain/:id" element={<ExplainPage />} />
      </Routes>
    </>
  );
};

export default App;

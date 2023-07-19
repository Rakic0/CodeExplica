import { Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import ExplainPage from './pages/ExplainPage';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        {/* <Route path="/explain" element={<ExplainPage data={data} />} /> */}

        <Route path="/explain/:id" element={<ExplainPage />} />
        {/*<Route path="/explain/code" element={<ExplainPage data={data} />} /> */}
      </Routes>
    </>
  );
};

export default App;

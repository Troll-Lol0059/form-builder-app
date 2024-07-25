import './App.css';
import { Route, Routes } from "react-router-dom";

// required Components
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col font-inter">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;

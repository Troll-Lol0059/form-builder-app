import './App.css';
import { Route, Routes } from "react-router-dom";

// required Components
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';
import CreateForm from './pages/CreateForm';
import ViewAllForms from './pages/ViewAllForms';


function App() {
  return (
    <div className="flex min-h-screen w-screen flex-col bg-richblack-900 font-inter">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/form/create' element={ <CreateForm />} />
          <Route path='/forms' element={<ViewAllForms />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;

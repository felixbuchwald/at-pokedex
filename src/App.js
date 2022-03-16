import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages & components
import Home from './pages/home/Home';
import Navbar from './components/Navbar';

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

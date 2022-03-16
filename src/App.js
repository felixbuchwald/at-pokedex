import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages & components
import Home from './pages/home/Home';

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

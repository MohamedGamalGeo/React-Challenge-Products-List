
import './App.css';
import { BrowserRouter , Routes, Route, Navigate } from "react-router-dom";
import Products from './pages/Products'
import Edit from './pages/Edit';
import Show from './pages/Show';
import New from './pages/New';

function App() {
  return (
    <BrowserRouter>
   
    <div className="app">
        <Routes>
        {/* Redirect root (/) to /products */}
        <Route path="/" element={<Navigate to="/products" />} />
        {/* Define the Products route */}
        <Route path="/products" element={<Products />} />
        
        <Route path="/show/:id" element={<Show />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/new" element={<New />} />

        
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;

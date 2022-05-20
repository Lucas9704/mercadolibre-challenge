import './App.css';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components';
import { About, Contact, Home, NotFound, ProductDescription, SearchResult } from './pages';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/items" element={<SearchResult />} />
          <Route path="/items/:id" element={<ProductDescription />} />
          {/*Cualquier otra ruta no definida - 404 not found - not match  */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

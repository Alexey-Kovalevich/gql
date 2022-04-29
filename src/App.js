import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="main">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;

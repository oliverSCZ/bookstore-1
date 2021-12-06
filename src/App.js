import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Books from './components/Books';
import Categories from './components/Categories';

const App = () => (
  <div className="App">
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Books />} />
      <Route exact path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;

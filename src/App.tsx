import { Route, Routes } from 'react-router';
import HomePage from './components/HomePage/HomePage';
import Opening from './components/Opening/Opening';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Opening />} />
      <Route path="/accueil" element={<HomePage />} />
    </Routes>
  );
}

export default App;

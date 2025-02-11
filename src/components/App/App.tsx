import { Route, Routes } from 'react-router';
import Content from './Content/Content';
import Opening from './Opening/Opening';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Opening />} />
      <Route path="/accueil" element={<Content />} />
    </Routes>
  );
}

export default App;

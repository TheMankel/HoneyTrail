import { Route, Routes } from 'react-router-dom';
import Content from './components/Content/Content';
import Home from './views/Home';

function App() {
  return (
    <Routes>
      <Route element={<Content />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

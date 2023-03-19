import { Route, Routes } from 'react-router-dom';
import Content from './components/Content/Content';
import Home from './views/Home';
import FAQ from './views/FAQ';
import Contact from './views/Contact';
import PrivacyPolicy from './views/PrivacyPolicy';
import NotFound from './views/NotFound';

function App() {
  return (
    <Routes>
      <Route element={<Content />}>
        <Route path='/' element={<Home />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

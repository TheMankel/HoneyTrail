import { Outlet } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Footer from '../UI/Footer/Footer';
import NavBar from '../UI/NavBar/NavBar';

const Content = () => {
  return (
    <main>
      <NavBar />
      <CssBaseline />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Content;

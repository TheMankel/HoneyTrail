import { Outlet } from 'react-router-dom';
import Footer from '../UI/Footer/Footer';
import NavBar from '../UI/NavBar/NavBar';

const Content = () => {
  return (
    <main>
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Content;

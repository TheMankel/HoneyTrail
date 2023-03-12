import Footer from '../UI/Footer/Footer';
import NavBar from '../UI/NavBar/NavBar';

const Content = ({ children }) => {
  return (
    <main>
      <NavBar />
      {children}
      <Footer />
    </main>
  );
};

export default Content;

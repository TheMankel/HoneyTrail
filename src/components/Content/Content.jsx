import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { CssBaseline, Box } from '@mui/material';
import Footer from '../UI/Footer/Footer';
import NavBar from '../UI/NavBar/NavBar';

const Content = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <NavBar />
      <Box
        component='main'
        bgcolor='background.olive'
        minHeight='calc(100vh - 64px - 134px)'
        width='100%'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'>
        <CssBaseline />
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Content;

import { useState } from 'react';
import { Container, AppBar, Toolbar, Box } from '@mui/material';
import NavMenu from './NavMenu/NavMenu';
import DrawerMenu from './DrawerMenu/DrawerMenu';
import Logo from './Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const pagesUrls = [
    { name: 'Home', url: '/#welcome' },
    { name: 'About', url: '/#about' },
    { name: 'Gallery', url: '/gallery' },
    { name: 'Download', url: '/#download' },
    { name: 'Contact', url: '/contact' },
  ];

  return (
    <AppBar position='sticky' sx={{ backgroundColor: 'background.default' }}>
      <Container maxWidth='xl'>
        <Toolbar
          sx={{
            color: 'text.primary',
            justifyContent: 'space-between',
          }}>
          <NavMenu handleOpenDrawer={setOpenDrawer} />
          <DrawerMenu
            openDrawer={openDrawer}
            handleOpenDrawer={setOpenDrawer}
            pagesUrls={pagesUrls}
          />
          <Logo sx={{ display: { xs: 'none', md: 'flex' } }} />
          <Box component='nav' sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Navigation pagesUrls={pagesUrls} sx={{ display: 'flex' }} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

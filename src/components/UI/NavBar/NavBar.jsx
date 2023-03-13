import { useState } from 'react';
import { Container, AppBar, Toolbar, Box } from '@mui/material';
import NavMenu from './NavMenu/NavMenu';
import DrawerMenu from './DrawerMenu/DrawerMenu';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <AppBar position='sticky' style={{ backgroundColor: '#593a0e' }}>
      <Container maxWidth='xl'>
        <Toolbar
          sx={{
            justifyContent: 'space-between',
          }}>
          <NavMenu handleOpenDrawer={setOpenDrawer} />
          <DrawerMenu
            openDrawer={openDrawer}
            handleOpenDrawer={setOpenDrawer}
          />
          <Logo sx={{ display: { xs: 'none', md: 'flex' } }} />
          <Box component='nav' sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Navigation />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

// sx={{ display: { xs: 'none', sm: 'flex' } }}

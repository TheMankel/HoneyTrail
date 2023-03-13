import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const NavMenu = ({ handleOpenDrawer }) => {
  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
      <IconButton
        color='inherit'
        aria-label='open drawer'
        onClick={() => handleOpenDrawer(true)}>
        <MenuIcon />
      </IconButton>
    </Box>
  );
};

export default NavMenu;

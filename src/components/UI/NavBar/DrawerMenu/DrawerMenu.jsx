import { Drawer, Box, IconButton, Typography, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

const DrawerMenu = ({ openDrawer, handleOpenDrawer }) => {
  return (
    <Drawer
      anchor='left'
      open={openDrawer}
      onClose={() => handleOpenDrawer(false)}>
      <Box height={1} textAlign='left'>
        <Box
          padding={1}
          sx={{
            bgcolor: '#f5f5f5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 1,
          }}>
          <Logo sx={{ display: 'flex' }} />
          <IconButton
            color='inherit'
            aria-label='close drawer'
            onClick={() => handleOpenDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Navigation flexWrap='wrap' color='black' />
      </Box>
    </Drawer>
  );
};

export default DrawerMenu;

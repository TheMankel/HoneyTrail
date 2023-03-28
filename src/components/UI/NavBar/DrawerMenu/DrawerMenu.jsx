import { Drawer, Box, IconButton, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Navigation from '../../Navigation/Navigation';
import Logo from '../Logo/Logo';

const DrawerMenu = ({ openDrawer, handleOpenDrawer, pagesUrls }) => {
  return (
    <Drawer
      anchor='left'
      open={openDrawer}
      onClose={() => handleOpenDrawer(false)}>
      <Box height={1} textAlign='left'>
        <Box
          padding={1}
          bgcolor='background.default'
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4,
          }}>
          <Logo
            onClick={() => handleOpenDrawer(false)}
            sx={{ display: 'flex' }}
          />
          <IconButton
            color='inherit'
            aria-label='close drawer'
            onClick={() => handleOpenDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Navigation
          pagesUrls={pagesUrls}
          buttonType={true}
          closeDrawer={() => handleOpenDrawer(false)}
        />
      </Box>
    </Drawer>
  );
};

export default DrawerMenu;

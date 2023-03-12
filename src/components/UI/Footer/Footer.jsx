import { Box, Container, Divider } from '@mui/material';
import Copyright from './CopyRight/CopyRight';
import FooterNavigation from './FooterNavigation/FooterNavigation';

const Footer = () => {
  return (
    <Box component='footer' sx={{ bgcolor: 'background.paper' }}>
      <Divider />
      <Container maxWidth='lg' sx={{ my: 2 }}>
        <FooterNavigation />
      </Container>
      <Divider />
      <Copyright title='Jakub Jankowski, Wojciech Bielawa' />
    </Box>
  );
};

export default Footer;

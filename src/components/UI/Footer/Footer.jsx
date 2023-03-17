import { Box, Container, Divider } from '@mui/material';
import Navigation from '../Navigation/Navigation';
import Copyright from './CopyRight/CopyRight';
import FooterNavigation from './FooterNavigation/FooterNavigation';

const Footer = () => {
  const pagesUrls = [
    { name: 'About', url: '/about' },
    { name: 'Gallery', url: '/gallery' },
    { name: 'Download', url: '/download' },
    { name: 'Contact', url: '/contact' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Privacy Policy', url: '/privacy-policy' },
  ];

  return (
    // <Box component='footer' sx={{ bgcolor: 'background.default' }}>
    <Box component='footer' mt={2}>
      {/* <Divider /> */}
      {/* <Box bgcolor='background.paper' py={1}> */}
      {/* <Container maxWidth='lg'> */}
      {/* <FooterNavigation /> */}
      {/* <Navigation pagesUrls={pagesUrls} />
      </Container> */}
      <Box component='nav' display='flex' justifyContent='center'>
        <Navigation pagesUrls={pagesUrls} />
      </Box>
      {/* </Box> */}
      {/* <Divider /> */}
      <Copyright title='Jakub Jankowski, Wojciech Bielawa' />
    </Box>
  );
};

export default Footer;

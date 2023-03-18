import { Box } from '@mui/material';
import Navigation from '../Navigation/Navigation';
import Copyright from './CopyRight/CopyRight';

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
    <Box component='footer' mt={2}>
      <Box component='nav' display='flex' justifyContent='center'>
        <Navigation pagesUrls={pagesUrls} sx={{ display: 'flex' }} />
      </Box>
      <Copyright title='Jakub Jankowski, Wojciech Bielawa' />
    </Box>
  );
};

export default Footer;

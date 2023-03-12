import { NavLink } from 'react-router-dom';
import { Box, Link } from '@mui/material';

const FooterNavigation = () => {
  const pagesUrls = [
    { name: 'About', url: '/about' },
    { name: 'Contact', url: '/contact' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Privacy Policy', url: '/privacy-policy' },
  ];

  const linkElements = pagesUrls.map((page, i) => {
    return (
      <Box component='li' key={i}>
        <Link
          underline='none'
          component={NavLink}
          color='text.primary'
          to={page.url || '/'}
          sx={{
            '&:hover': {
              opacity: 0.75,
            },
          }}>
          {page.name}
        </Link>
      </Box>
    );
  });

  return <Box component='ul'>{linkElements}</Box>;
};

export default FooterNavigation;

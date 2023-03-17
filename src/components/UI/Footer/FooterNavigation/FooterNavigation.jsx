import { NavLink } from 'react-router-dom';
import { Box, Link, Typography, ListItem, List } from '@mui/material';

const FooterNavigation = () => {
  const pagesUrls = [
    { name: 'About', url: '/about' },
    { name: 'Gallery', url: '/gallery' },
    { name: 'Contact', url: '/contact' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Privacy Policy', url: '/privacy-policy' },
  ];

  const linkElements = pagesUrls.map((page, i) => {
    return (
      <ListItem key={i}>
        <Link
          underline='none'
          component={NavLink}
          color='text.primary'
          to={page.url || '/'}
          sx={{
            '&:hover': {
              // opacity: 0.75,
              color: 'text.secondary',
            },
          }}>
          <Typography>{page.name}</Typography>
        </Link>
      </ListItem>
    );
  });

  return (
    <Box display='flex' justifyContent='space-around' flexWrap='wrap'>
      <List>{linkElements}</List>
      <List>{linkElements}</List>
    </Box>
  );
};

export default FooterNavigation;

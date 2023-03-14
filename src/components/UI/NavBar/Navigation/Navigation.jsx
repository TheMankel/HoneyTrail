import { NavLink } from 'react-router-dom';
import { Link, List, ListItem, Typography } from '@mui/material';

const Navigation = (props) => {
  const pagesUrls = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Screenshots', url: '/screenshots' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Contact', url: '/contact' },
  ];

  const linkElements = pagesUrls.map((page, i) => {
    return (
      <ListItem key={i}>
        <Link
          underline='none'
          component={NavLink}
          color='inherit'
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
    <List
      sx={{
        display: 'flex',
        ...props,
      }}>
      {linkElements}
    </List>
  );
};

export default Navigation;

import { NavLink } from 'react-router-dom';
import { Link, List, ListItem, ListItemButton } from '@mui/material';

const Navigation = ({ pagesUrls = [], buttonType = false, ...other }) => {
  if (!pagesUrls.length) return null;

  const linkElements = pagesUrls.map((page, i) => {
    return !buttonType ? (
      <ListItem
        key={i}
        sx={{
          width: 'auto',
        }}>
        <Link
          underline='none'
          component={NavLink}
          color='text.primary'
          to={page.url || '/'}
          fontSize='1.25rem'
          sx={{
            '&:hover': {
              // opacity: 0.75,
              color: 'text.secondary',
            },
          }}>
          {page.name}
        </Link>
      </ListItem>
    ) : (
      <ListItemButton
        key={i}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Link
          underline='none'
          component={NavLink}
          color='text.primary'
          to={page.url || '/'}
          fontSize='1.25rem'
          sx={{
            '&:hover': {
              // opacity: 0.75,
              color: 'text.secondary',
            },
          }}>
          {page.name}
        </Link>
      </ListItemButton>
    );
  });

  return (
    <List disablePadding sx={{ ...other.sx }}>
      {linkElements}
    </List>
  );
};

export default Navigation;

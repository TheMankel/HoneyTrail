import { NavLink } from 'react-router-dom';
import { Link, List, ListItem, Typography } from '@mui/material';

const Navigation = ({ pagesUrls = [], ...other }) => {
  if (!pagesUrls.length) return null;

  const linkElements = pagesUrls.map((page, i) => {
    return (
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
          sx={{
            '&:hover': {
              // opacity: 0.75,
              color: 'text.secondary',
            },
          }}>
          <Typography component='a' variant='h6'>
            {page.name}
          </Typography>
        </Link>
      </ListItem>
    );
  });

  return (
    <List disablePadding sx={{ display: 'flex', ...other.sx }}>
      {linkElements}
    </List>
  );
};

export default Navigation;

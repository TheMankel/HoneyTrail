import { NavLink } from 'react-router-dom';
import { Link, Typography } from '@mui/material';

const Copyright = (props) => {
  const authors = [
    { name: 'Jakub Jankowski', url: 'https://github.com/TheMankel' },
    { name: 'Wojciech Bielawa', url: 'https://github.com/HiImWhite' },
  ];

  return (
    <Typography
      variant='body1'
      color='text.secondary'
      align='center'
      padding={2}
      {...props}>
      {'Copyright © '}
      {authors.map((author, i) => (
        <Link
          key={i}
          underline='none'
          component={NavLink}
          color='inherit'
          to={author.url || '/'}
          sx={{
            '&:hover': {
              // opacity: 0.75,
              color: 'text.primary',
            },
          }}>
          {author.name}
          {authors.length !== i + 1 ? ', ' : ' '}
        </Link>
      ))}
      {new Date().getFullYear()}
    </Typography>
  );
};

export default Copyright;

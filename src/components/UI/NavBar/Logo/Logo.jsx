import { NavLink } from 'react-router-dom';
import { Typography, Link } from '@mui/material';

const Logo = (props) => {
  return (
    <Link
      component={NavLink}
      color='inherit'
      underline='none'
      to='/'
      alignItems='center'
      {...props}>
      <img
        src='/favicon.png'
        alt='Logo'
        style={{
          height: '40px',
          padding: '8px',
        }}
      />
      <Typography
        component='h2'
        variant='h5'
        color='inherit'
        align='left'
        sx={{
          flex: 1,
          py: 2,
          '&:hover': {
            opacity: 0.75,
          },
        }}>
        HoneyTrail
      </Typography>
    </Link>
  );
};

export default Logo;

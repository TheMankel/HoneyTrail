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
          height: '56px',
          padding: '8px',
          aspectRatio: 1,
        }}
      />
      <Typography
        component='h2'
        variant='h5'
        color='inherit'
        align='left'
        fontSize={28}
        pt={1.75}
        pb={1}
        sx={{
          flex: 1,
          // py: 2,
          '&:hover': {
            // opacity: 0.75,
            color: 'text.secondary',
          },
        }}>
        HoneyTrail
      </Typography>
    </Link>
  );
};

export default Logo;

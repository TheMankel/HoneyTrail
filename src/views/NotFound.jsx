import React from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material';

const NotFound = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        height={'100vh'}
        display={'flex'}
        alignItems={'center'}
        bgcolor={'rgb(28, 44, 26)'}
        padding={'16px 0 '}>
        <Container>
          <Box>
            <Typography
              variant='h1'
              component={'h1'}
              align={'center'}
              sx={{ fontWeight: 700 }}>
              404
            </Typography>
            <Typography
              variant='h6'
              component='p'
              color='textSecondary'
              align={'center'}>
              Oops! Looks like you followed a bad link.
              <br />
              If you think this is a problem with us, please{' '}
              <Link
                component={NavLink}
                to={'/contact'}
                underline='none'
                sx={{
                  '&:hover': {
                    opacity: 0.75,
                  },
                }}>
                tell us
              </Link>
            </Typography>
            <Box marginTop={4} display={'flex'} justifyContent={'center'}>
              <Button
                component={NavLink}
                variant='contained'
                color='primary'
                size='large'
                to={'/'}>
                Back home
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default NotFound;

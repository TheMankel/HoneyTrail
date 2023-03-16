import { Box, Container, Card, CardMedia, Typography } from '@mui/material';

const Welcome = () => {
  return (
    <Box
      component='section'
      sx={{
        backgroundSize: 'cover',
        backgroundImage: `url(${'/assets/Background.png'})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        // opacity: 0.8,
      }}>
      <Container maxWidth='xl'>
        <Box
          display='flex'
          justifyContent='center'
          sx={{
            userSelect: 'none',
            pointerEvents: 'none',
            padding: {
              xs: 4,
              md: 8,
            },
          }}>
          <Box
            component='img'
            height={100}
            alt='Game title'
            src='assets/Title.png'
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}>
          <Box bgcolor={'rgba(22, 35, 21, 0.5)'} padding={2} borderRadius={1}>
            <Typography
              component='h2'
              fontSize={48}
              fontWeight={700}
              color='text.primary'>
              Endless challenge
            </Typography>
            <Typography
              color='text.secondary'
              fontSize={24}
              fontWeight={500}
              maxWidth={400}>
              Run as far as you can and test yourself
            </Typography>
          </Box>
          {/* <Card sx={{ boxShadow: '0px 0px 4px 4px rgba(255, 255, 255, 0.25)' }}> */}
          <Card sx={{ boxShadow: 20 }}>
            <CardMedia
              component='img'
              height='242'
              image='/assets/Cinematic.png'
              alt='Ingame camera'
            />
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default Welcome;

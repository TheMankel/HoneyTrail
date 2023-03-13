import {
  Box,
  Container,
  Card,
  CardMedia,
  Typography,
  Paper,
} from '@mui/material';

const Welcome = () => {
  return (
    <Box
      component='section'
      sx={{
        backgroundSize: 'cover',
        backgroundImage: `url(${'/assets/Background.png'})`,
        height: '100vh',
        // opacity: 0.8,
      }}>
      <Container maxWidth='xl' sx={{ height: '100vh' }}>
        <Box
          display='flex'
          justifyContent='center'
          padding={8}
          sx={{ userSelect: 'none', pointerEvents: 'none' }}>
          <Box
            component='img'
            height={100}
            alt='Game title'
            src='assets/Title.png'
          />
        </Box>
        <Box
          sx={{
            // position: 'absolute',
            // right: 50,
            // bottom: 100,
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Paper sx={{ backgroundColor: 'rgba(69, 69, 69, 0.5)', padding: 6 }}>
            <Typography
              component='h2'
              fontSize={48}
              fontWeight={700}
              color='#ff9f10'>
              Endless challenge
            </Typography>
            <Typography
              color='#ff9f10'
              fontSize={24}
              fontWeight={500}
              maxWidth={400}>
              Run as far as you can and test yourself
            </Typography>
          </Paper>
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

import { Box, Container, Card, CardMedia, Typography } from '@mui/material';
import ShowCase from '../ShowCase/ShowCase';
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import Heading from '../Heading/Heading';

const Welcome = () => {
  return (
    <SectionWrapper
      sx={{
        backgroundSize: 'cover',
        backgroundImage: `url(${'/assets/Background.png'})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        // opacity: 0.8,
      }}>
      <Typography
        component='h1'
        fontSize={96}
        fontWeight={700}
        color='text.primary'
        textAlign='center'
        gutterBottom
        sx={{
          textShadow: '#162315 0 0 8px',
          fontSize: {
            xs: 56,
            md: 76,
            lg: 96,
          },
        }}>
        Honey Trail
      </Typography>
      <ShowCase
        image='/assets/Cinematic.png'
        alt='Ingame camera'
        imageStyles={{ boxShadow: 20 }}>
        <Heading
          title='Endless challenge'
          subtitle='Run as far as you can and test yourself'
          headingStyles={{
            backgroundColor: 'rgba(22, 35, 21, 0.5)',
            padding: 4,
            borderRadius: 1,
          }}
        />
      </ShowCase>
      {/* <Box
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
          <Card sx={{ boxShadow: 20 }}>
            <CardMedia
              component='img'
              height='250'
              image='/assets/Cinematic.png'
              alt='Ingame camera'
            />
          </Card>
        </Box> */}
    </SectionWrapper>
  );
};

export default Welcome;

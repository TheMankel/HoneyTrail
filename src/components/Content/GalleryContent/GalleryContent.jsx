import { Box, Container } from '@mui/material';
import GalleryCards from './GalleryCards/GalleryCards';
import Heading from '../../UI/Heading/Heading';

const GalleryContent = () => {
  return (
    <Box
      sx={{
        py: {
          xs: 2,
          md: 4,
        },
      }}>
      <Container>
        <Box py={2} borderRadius={1} bgcolor='background.paper'>
          <Heading
            title='Gallery'
            subtitle='Get a glimpse of the fast-paced action and stunning graphics in our
        game gallery. Join the fun and show off your bear skills today!'
            headingStyles={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          />
        </Box>
        <GalleryCards />
      </Container>
    </Box>
  );
};

export default GalleryContent;

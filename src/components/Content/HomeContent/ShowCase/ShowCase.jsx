import { Box, Card, CardMedia, Slide } from '@mui/material';

const ShowCase = ({ image, alt, imageStyles, children }) => {
  return (
    <Box
      display='flex'
      justifyContent='space-around'
      alignItems='center'
      gap={2}
      sx={{
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
      }}>
      {children}
      <Slide in={true} timeout={3000}>
        <Card sx={imageStyles}>
          <CardMedia
            component='img'
            image={image}
            alt={alt}
            loading='lazy'
            sx={{
              height: {
                xs: 175,
                md: 250,
              },
            }}
          />
        </Card>
      </Slide>
    </Box>
  );
};

export default ShowCase;

import { Box, Card, CardMedia } from '@mui/material';

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
      <Card sx={imageStyles}>
        <CardMedia
          component='img'
          image={image}
          alt={alt}
          sx={{
            height: {
              xs: 175,
              md: 250,
            },
          }}
        />
      </Card>
    </Box>
  );
};

export default ShowCase;

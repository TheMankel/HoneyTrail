import { Box, Typography, Card, CardMedia } from '@mui/material';

const ShowCase = ({
  title,
  subtitle,
  image,
  alt,
  headingStyles,
  imageStyles,
  children,
}) => {
  return (
    <Box
      display='flex'
      justifyContent='space-around'
      alignItems='center'
      gap={2}
      flexWrap='wrap'>
      <Box
        // bgcolor={'rgba(22, 35, 21, 0.5)'}
        // padding={2}
        // borderRadius={1}
        sx={headingStyles}>
        <Typography
          component='h2'
          fontSize={48}
          fontWeight={700}
          color='text.primary'>
          {title}
        </Typography>
        <Typography
          color='text.secondary'
          fontSize={24}
          fontWeight={500}
          maxWidth={400}
          gutterBottom>
          {subtitle}
        </Typography>
        {children}
      </Box>
      <Card sx={imageStyles}>
        <CardMedia component='img' height='250' image={image} alt={alt} />
      </Card>
    </Box>
  );
};

export default ShowCase;

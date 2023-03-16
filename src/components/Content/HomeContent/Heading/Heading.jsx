import { Box, Typography } from '@mui/material';

const Heading = ({ title, subtitle, headingStyles, children }) => {
  if (!title || !subtitle) return null;

  return (
    <Box sx={headingStyles}>
      <Typography
        component='h2'
        fontWeight={700}
        color='text.primary'
        gutterBottom
        sx={{
          textAlign: {
            xs: 'center',
            md: 'left',
          },
          fontSize: {
            xs: 32,
            md: 40,
            lg: 48,
          },
        }}>
        {title}
      </Typography>
      <Typography
        color='text.secondary'
        fontSize={24}
        fontWeight={500}
        maxWidth={400}
        sx={{
          textAlign: {
            xs: 'center',
            md: 'left',
          },
          margin: {
            xs: '0 auto',
            md: '0',
          },
          fontSize: {
            xs: 18,
            md: 24,
            lg: 30,
          },
        }}>
        {subtitle}
      </Typography>
      {children}
    </Box>
  );
};

export default Heading;

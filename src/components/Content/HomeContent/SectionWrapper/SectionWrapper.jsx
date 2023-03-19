import { Box, Container } from '@mui/material';

const SectionWrapper = ({ children, ...other }) => {
  return (
    <Box
      component='section'
      padding={2}
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      // bgcolor='background.default'
      sx={{ ...other.sx }}>
      <Container maxWidth='xl'>{children}</Container>
    </Box>
  );
};

export default SectionWrapper;

import { Box, Container } from '@mui/material';

const SectionWrapper = ({ id, children, ...other }) => {
  return (
    <Box
      component='section'
      padding={2}
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      id={id}
      // bgcolor='background.default'
      sx={{ ...other.sx }}>
      <Container maxWidth='xl'>{children}</Container>
    </Box>
  );
};

export default SectionWrapper;

import { Box, Container } from '@mui/material';

const HomeWrapper = ({ wrapperStyles, children }) => {
  return (
    <Box component='section' padding={2} sx={wrapperStyles}>
      <Container maxWidth='xl'>{children}</Container>
    </Box>
  );
};

export default HomeWrapper;

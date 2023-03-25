import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Grid, TextField, Typography, Button, Card } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import emailjs from '@emailjs/browser';
import AlertInfo from '../../../UI/AlertInfo/AlertInfo';

const ContactForm = () => {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState(null);
  const [severity, setSeverity] = useState(null);
  const formRef = useRef();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const email = formRef.current['email'].value;
    const fullName = formRef.current['from_name'].value;
    const message = formRef.current['message'].value;

    if (!email || !fullName || !message) {
      setInfo('All fields are required!');
      setSeverity('error');
      setOpen(true);
      return;
    }

    if (!/@/.test(email)) {
      setInfo('Please enter a valid email address!');
      setSeverity('error');
      setOpen(true);

      return;
    }

    try {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_USER_ID,
        )
        .then(() => {
          setInfo('Successfully sent message!');
          setSeverity('success');
          setOpen(true);
          formRef.current.reset();
        });
    } catch (err) {
      setInfo('Something went wrong. Try again later!');
      setSeverity('error');
      setOpen(true);
      formRef.current.reset();
    }
  };

  return (
    <Box
      padding={{ xs: 3, sm: 6 }}
      width={'100%'}
      component={Card}
      borderRadius={2}
      boxShadow={4}>
      <Box
        component='form'
        noValidate
        autoComplete='off'
        ref={formRef}
        onSubmit={sendEmail}>
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12}>
            <TextField
              sx={{ height: 54 }}
              label='Full name'
              variant='outlined'
              color='primary'
              size='medium'
              fullWidth
              id='from_name'
              name='from_name'
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <TextField
              sx={{ height: 54 }}
              label='Last name'
              variant='outlined'
              color='primary'
              size='medium'
              fullWidth
              id='lastname'
              name='lastname'
            />
          </Grid> */}
          <Grid item xs={12}>
            <TextField
              sx={{ height: 54 }}
              label='Email'
              type='email'
              variant='outlined'
              color='primary'
              size='medium'
              fullWidth
              id='email'
              name='email'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Message'
              multiline
              rows={6}
              variant='outlined'
              color='primary'
              size='medium'
              fullWidth
              id='message'
              name='message'
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              mx='auto'
              variant='contained'
              color='primary'
              size='medium'
              fullWidth
              type='submit'
              sx={{ height: 54, textTransform: 'none' }}>
              Submit
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography component='p' variant='body2' align='left'>
              By clicking on "submit" you agree to our{' '}
              <Box
                component={NavLink}
                to='/privacy-policy'
                color={theme.palette.text.primary}
                fontWeight={'700'}>
                Privacy Policy
              </Box>
              .
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <AlertInfo
        open={open}
        handleOpen={setOpen}
        severity={severity}
        message={info}
      />
    </Box>
  );
};

export default ContactForm;

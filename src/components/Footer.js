import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="40px" bgcolor="#FFFFFF">
    <Stack
      gap="30px"
      sx={{ alignItems: 'center' }}
      flexWrap="wrap"
      px="40px"
      pt="12px"
    >
      <img src={Logo} alt="logo" style={{ width: '100px', height: '100px' }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: '28px', xs: '20px' } }}
      mt="20px"
      textAlign="center"
      pb="20px"
    >
      Made by TYSON🤖 @2025
    </Typography>
  </Box>
);

export default Footer;

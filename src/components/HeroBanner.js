import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}
    position="relative"
    p="20px"
  >
    <Typography color="#FF0000" fontWeight="600" fontSize="26px">
      Fitness Club
    </Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: '44px', xs: '40px' } }}
      mb="23px"
      mt="30px"
    >
      Train Hard Stay Strong <br />
      Be FitBull
    </Typography>
    <Typography
      fontSize="22px"
      fontFamily="'DM Sans', sans-serif"
      lineHeight="35px"
      fontWeight={300}
    >
      Welcome to FitBull <br />
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a
        href="#exercises"
        style={{
          marginTop: '45px',
          textDecoration: 'none',
          width: '200px',
          textAlign: 'center',
          background: '#FF2625',
          padding: '14px',
          fontSize: '22px',
          textTransform: 'none',
          color: 'white',
          borderRadius: '4px',
        }}
      >
        Explore Workouts
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      color="#FF2625"
      sx={{
        opacity: '0.1',
        display: { lg: 'block', xs: 'none' },
        fontSize: '200px',
      }}
    >
      WorkOut
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;

import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/icons/Logo.png';

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '122px', xs: '40px' }, mt: {sm:'18px', xs:'6px'}, justifyContent: 'none'}} px="20px" >
      <Link>
        <img src={Logo} alt='logo'
          style={{ width: '90px', height: '90px', margin: '0 20px'}}
        />
      </Link>
      <Stack direction='row' gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to='/' style={{ textDecoration: 'none', color: '#2F855A', borderBottom:'3px solid #2F855A' }}>Home</Link>
        <a href='#plants' style={{textDecoration: 'none', color: '#2F855A'}}>Plants</a>
    </Stack>
    </Stack>
  )
}

export default Navbar
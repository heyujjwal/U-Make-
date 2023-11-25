import React from 'react'
import Search from './search';
import CustomButton from './CustomButton';
import { useState } from 'react';
import { Menu } from '@mui/icons-material';
// 
import { AppBar, Toolbar, Box, IconButton, Drawer, List, styled } from '@mui/material';


const StyledHeader=styled(AppBar)`
 background: #4B008B;
 height:55px;
`
const Component=styled(Box)`
 margin-left:8%;
 line-height: 0;
    color: #FFFFFF;
    text-decoration: none;
 margin-bottom:0.2%
`


const CustomButtonWrapper = styled('span')(({ theme }) => ({ 
  margin: '0 5% 0 auto', 
  [theme.breakpoints.down('sm')]: {
      display: 'none'
  }
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));


const Header = () => {
  const logoUrl="https://i.ibb.co/zXrpMBw/Screenshot-2023-10-23-233935-removebg-preview.png"
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
}

const handleOpen = () => {
    setOpen(true);
}

const list = () => (
  <Box style={{ width: 250 }} onClick={handleClose}>
      <List>
          <listItem button>
              <CustomButton />
          </listItem>
      </List>
  </Box>
);
  return (
    
      <StyledHeader position="fixed">
        <Toolbar style={{minHeight:55}}>
        <MenuButton
                color="inherit"
                onClick={handleOpen}
            >
                <Menu />
            </MenuButton>

            <Drawer open={open} onClose={handleClose}>
                {list()}
            </Drawer>
 

            
         <Component >
         <a href="/"><img  src={logoUrl} alt='fsf' style={{width: 250}}/></a>
         </Component>
         <Search />
         <CustomButtonWrapper>
                <CustomButton />
            </CustomButtonWrapper>
         
        </Toolbar>
      </StyledHeader>
 
  )
}

export default Header






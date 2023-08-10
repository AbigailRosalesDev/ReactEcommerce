import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import CartIcon from '../../containers/cart/CartIcon'
import { Link } from 'react-router-dom';
import { AppContext } from '../context/Context';


const Navbar = () => {
  const pages = [{id:'', title:'Home'},{ id:'products/all', title:'Products'} ]
  const { quantityCart } = React.useContext(AppContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };   


  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ backgroundColor: '#5f2568' }}>
        <Toolbar disableGutters>
          <AutoFixHighIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 600,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Magic Shop
            </Typography>
          </Link>
          <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}>
            <AutoFixHighIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to={"/"+page.id} >
              <Button
                key={page.id}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title} 
              </Button>
              </Link>
            ))}
          </Box>



          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

            
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                 <Link to={"/"+page.id} >
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
                </Link>
              ))}
            </Menu>
            <IconButton
            
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          </Box>

          {
            quantityCart===0 ? 
            null
            :
            <Box sx={{ flexGrow: 0 }}>

            <Link to={'/cart'} style={{ textDecoration: 'none', color: '#fff' }}>
              <CartIcon cartQuantity={quantityCart} />
            </Link>


          </Box>}
        </Toolbar>
      </Container>
    </AppBar>

  );
}

/*Link to not use the etiquet A, it's more used routes but it's a good option  */
export default Navbar;
/*        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Typography variant="body1" color="white">
                  Products
                </Typography>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
*/
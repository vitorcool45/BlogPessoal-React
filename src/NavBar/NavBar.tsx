import React from 'react';
import Menu from '@mui/material/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import MenuIcon from '@material-ui/icons/Menu';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <AppBar position="fixed" className="degrade">
        <Toolbar>

          <Typography variant="h6" >
            BlogPessoal
          </Typography>
          <Box display="flex" alignItems="center" ml="auto" >


            <Button
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MenuIcon className="icon" />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Home</MenuItem>

              <MenuItem onClick={handleClose}>Postagens</MenuItem>

              <MenuItem onClick={handleClose}>Temas</MenuItem>

              <MenuItem onClick={handleClose}>Cadastrar tema</MenuItem>

              <Link to='/cadastro' className='text-decorator-none'>
              <MenuItem onClick={handleClose}>Cadastrar usuário</MenuItem>
              </Link>

              <Link to='/login' className='text-decorator-none'>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Link>
              
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar

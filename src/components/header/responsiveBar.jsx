import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { withRouter } from 'react-router-dom';

const pages = ['Load Data', 'Tree View', 'Create Test Case', 'Formated Output'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = props => {
  const {history} = props;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (pageURL) => {
    history.push(pageURL)
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (pageURL) => {
    //history.push(pageURL)
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static"    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 8,    display: { xs: 'none', md: 'flex'} }}
          >
            FICO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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

                <MenuItem onClick={() => handleCloseNavMenu('/')}>
                  <Typography textAlign="center">Json Data </Typography>
                </MenuItem>

                <MenuItem onClick={() => handleCloseNavMenu('/treeview')}>
                  <Typography textAlign="center">Tree Viewer</Typography>
                </MenuItem>

                <MenuItem onClick={() => handleCloseNavMenu('/testcase')}>
                  <Typography textAlign="center">Test Case Editor</Typography>
                </MenuItem>

              <MenuItem onClick={() => handleCloseNavMenu('/output')}>
                <Typography textAlign="center">Formated Output Viewer</Typography>
              </MenuItem>

            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            FICO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

              <Button onClick={() => handleCloseNavMenu('/')}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              Json Data
              </Button>

              <Button onClick={() => handleCloseNavMenu('/treeview')}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              Tree Viewer
              </Button>

              <Button onClick={() => handleCloseNavMenu('/testcase')}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              Test Case Editor
              </Button>

              <Button onClick={() => handleCloseNavMenu('/output')}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              Formated Output Viewer
              </Button>

          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default withRouter(Header);

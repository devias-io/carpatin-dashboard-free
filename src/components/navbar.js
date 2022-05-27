import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Avatar, Box, Link, Toolbar } from '@mui/material';
import { Logo } from './logo';

export const Navbar = () => (
  <AppBar
    elevation={0}
    sx={{ backgroundColor: '#1e212a' }}
  >
    <Toolbar
      disableGutters
      sx={{
        alignItems: 'center',
        display: 'flex',
        minHeight: 64,
        px: 3,
        py: 1
      }}
    >
      <Box
        component={RouterLink}
        to="/"
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Logo />
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Link
        color="#ffffff"
        href="https://material-ui.com/store/items/carpatin-dashboard"
        sx={{ mr: 1.25 }}
        target="_blank"
        variant="body2"
      >
        See Pro Version
      </Link>
      <Avatar
        alt="User"
        src="/static/user-chen_simmons.png"
      />
    </Toolbar>
  </AppBar>
);

import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Navbar } from './navbar';
import { Sidebar } from './sidebar';
import { Footer } from './footer';

const LayoutRoot = styled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  })
);

const LayoutContent = styled('div')(
  () => ({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingLeft: 73,
    paddingTop: '64px'
  })
);

const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  overflow: 'auto'
});

export const Layout = () => (
  <LayoutRoot>
    <Navbar />
    <Sidebar />
    <LayoutContent>
      <LayoutContainer>
        <Outlet />
        <Footer />
      </LayoutContainer>
    </LayoutContent>
  </LayoutRoot>
);

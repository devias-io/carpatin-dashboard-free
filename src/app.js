import { useRoutes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { routes } from './routes';

const App = () => {
  const content = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {content}
    </ThemeProvider>
  );
};

export default App;

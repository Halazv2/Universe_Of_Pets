import { useRoutes } from 'react-router-dom';
import router from './router';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { CssBaseline } from '@mui/material';
import ThemeProvider from '@/theme/ThemeProvider';
import AuthRoutes from '@/utility/auth/AuthRoutes';

function App() {
  const content = useRoutes(router);

  return (
    <ThemeProvider>
      <AuthRoutes>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CssBaseline />
          {content}
        </LocalizationProvider>
      </AuthRoutes>
    </ThemeProvider>
  );
}
export default App;
